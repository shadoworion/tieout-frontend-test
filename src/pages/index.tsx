import { useCallback, useMemo, useRef } from "react";
import {
  ColDef,
  ColGroupDef,
  DefaultMenuItem,
  GetContextMenuItemsParams,
  IServerSideGetRowsParams,
  MenuItemDef,
  NewValueParams,
  RowClassParams,
  ValueFormatterParams,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { AgTable } from "../components/Table";
import { useI18nContext } from "../i18n/i18n-react";
import {
  autoSizeColumns,
  copyId,
  fitColumns,
  refreshData,
  resetFilters,
} from "../components/Table/commons/contextMenu";
import { AgTextboxCell } from "../components/Table/commons/textboxCell";
import { AgDateCell } from "../components/Table/commons/dateCell";
import {
  SourceTrx_Filter_AccountsQuery,
  SourceTrx_Filter_AccountsQueryVariables,
  SourceTrx_Filter_AccountsDocument,
  SourceTrx_Filter_SubAccountsQuery,
  SourceTrx_Filter_SubAccountsQueryVariables,
  SourceTrx_Filter_SubAccountsDocument,
  SourceTrx_Filter_FieldsQuery,
  SourceTrx_Filter_FieldsQueryVariables,
  SourceTrx_Filter_FieldsDocument,
  SourceTrx_Filter_RawFieldsQuery,
  SourceTrx_Filter_RawFieldsQueryVariables,
  SourceTrx_Filter_RawFieldsDocument,
  SourceTrx_Filter_MethodsQuery,
  SourceTrx_Filter_MethodsQueryVariables,
  SourceTrx_Filter_MethodsDocument,
  Outlet,
} from "../generated/graphql";
import { App } from "antd";
import { graphRequest } from "../utils/hooks/graphql/request";
import { AgTagCell } from "../components/Table/commons/tagCell";
import { normalizeFilterModel } from "../components/Table/commons/filterNormalizer";
import { setFilter } from "../components/Table/commons/setFilterNormalizer";
import { valueFormatter } from "../components/Table/commons/valueFormatter";
import { BiTransfer } from "react-icons/bi";
import { formatNumber } from "../utils/shared";
import { setFilterDoubleClick } from "../components/Table/commons/setFilterDoubleClick";
import { AgCustomCell } from "../components/Table/commons/customCell";
import { RiNftLine } from "react-icons/ri";
import { IoDocumentAttachOutline } from "react-icons/io5";
import axios from "axios";
import dayjs from "dayjs";

export type ISourceTrx = any;

const SourceTrx = () => {
  const { LL } = useI18nContext();
  const { notification } = App.useApp();
  const gridRef = useRef<AgGridReact<ISourceTrx>>();

  const onGridReady = useCallback(
    ({ api }) =>
      api.setGridOption("serverSideDatasource", {
        getRows: async (params: IServerSideGetRowsParams<ISourceTrx>) => {
          const {
            request: { startRow, endRow, sortModel, filterModel },
            success,
            fail,
          } = params;

          const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

          axios
            .post(
              "https://mamfoin5eyec6lowydywj6mmji0mzebh.lambda-url.eu-west-1.on.aws/",
              {
                query: "sourceTrx_list",
                startRow,
                endRow,
                sortModel,
                filterModel: normalizeFilterModel(filterModel, {
                  comments: {
                    toLowerCase: true,
                  },
                }),
                currencies: [],
                address: null,
                tags: [],
                showNotNormalized: "include",
                showIgnored: "include",
                showEmpty: "include",
                showManuals: "include",
                showWalletsOnly: false,
                showTransfers: "include",
                showNfts: "include",
                timezone: timeZone,
              },
              {
                headers: {
                  Authorization: `Bearer ag-grid-test`,
                  "B-ORGANIZATION": "bee03288-fe80-4503-8f4c-decd248d49c0",
                },
              }
            )
            .then(({ data }) => success(data))
            .catch((error) => {
              console.error(error);
              fail();
            });
        },
      }),
    []
  );

  const NftCell = (props: ValueFormatterParams, nft: string | null) => {
    return (
      <AgCustomCell className="leading-4 !justify-start">
        {(() => {
          if (!!nft && nft !== "true")
            return (
              <img
                className="min-w-5 h-5 cursor-pointer ml-2"
                src={nft}
                onClick={() => window.open(nft, "_blank")}
              />
            );
          if (nft === "true")
            return <RiNftLine size="1.3rem" className="min-w-5 ml-2" />;
        })()}
        {props.value}
      </AgCustomCell>
    );
  };

  const columnDefs = useMemo<(ColDef<ISourceTrx> | ColGroupDef<ISourceTrx>)[]>(
    () => [
      {
        colId: "st.accountId",
        field: "account",
        headerName: LL.SourceTrx.columns.account(),
        cellRenderer: AgTagCell,
        filter: "agSetColumnFilter",
        floatingFilter: true,
        filterParams: {
          values: ({ success }) => {
            graphRequest<
              SourceTrx_Filter_AccountsQuery,
              SourceTrx_Filter_AccountsQueryVariables
            >(SourceTrx_Filter_AccountsDocument).then(
              ({ sourceTrx_filter_accounts }) => {
                success(sourceTrx_filter_accounts);
              }
            );
          },
          keyCreator: ({ value }) => value.accountId,
          valueFormatter: ({ value }) => value.account,
        },
        onCellDoubleClicked: ({ api, data }) =>
          setFilterDoubleClick(api, "st.accountId", data.accountId),
        minWidth: 200,
      },
      {
        headerName: LL.SourceTrx.columns.method(),
        children: [
          {
            colId: "tm.method",
            field: "method",
            headerName: LL.SourceTrx.columns.method(),
            valueGetter: ({ data }) =>
              data?.isExcluded ? "ignored" : data?.method,
            cellRenderer: ({ value, data }: ValueFormatterParams) => (
              <AgCustomCell className="leading-4 !justify-start">
                {!!data.transfer && (
                  <BiTransfer className="min-w-5 ml-2" size="1.2rem" />
                )}
                {!!data.documentation && (
                  <IoDocumentAttachOutline
                    className="min-w-5 ml-2"
                    size="1.2rem"
                  />
                )}
                {valueFormatter(LL, value, "MapMethods")}
              </AgCustomCell>
            ),
            filter: "agSetColumnFilter",
            floatingFilter: true,
            filterParams: {
              values: ({ success }) => {
                graphRequest<
                  SourceTrx_Filter_MethodsQuery,
                  SourceTrx_Filter_MethodsQueryVariables
                >(SourceTrx_Filter_MethodsDocument).then(
                  ({ sourceTrx_filter_methods }) => {
                    success(setFilter(sourceTrx_filter_methods));
                  }
                );
              },
              valueFormatter: ({ value }) =>
                valueFormatter(LL, value, "MapMethods"),
              comparator: (a: string, b: string) =>
                String(LL.MapMethods[a]()).localeCompare(LL.MapMethods[b]()),
            },
            onCellDoubleClicked: ({ api, data }) => {
              if (data.isExcluded) return;
              setFilterDoubleClick(api, "tm.method", data.method);
            },
          },
          {
            colId: "tm.subAccountId",
            field: "subAccount",
            headerName: LL.SourceTrx.columns.subAccount(),
            columnGroupShow: "open",
            filter: "agSetColumnFilter",
            floatingFilter: true,
            filterParams: {
              values: ({ success }) => {
                graphRequest<
                  SourceTrx_Filter_SubAccountsQuery,
                  SourceTrx_Filter_SubAccountsQueryVariables
                >(SourceTrx_Filter_SubAccountsDocument).then(
                  ({ sourceTrx_filter_subAccounts }) => {
                    success(
                      setFilter(sourceTrx_filter_subAccounts, {
                        accountId: null,
                        account: null,
                      })
                    );
                  }
                );
              },
              keyCreator: ({ value }) => value.accountId,
              valueFormatter: ({ value }) => valueFormatter(LL, value.account),
            },
            onCellDoubleClicked: ({ api, data }) =>
              setFilterDoubleClick(api, "tm.subAccountId", data.subAccountId),
            minWidth: 150,
          },
        ],
      },
      {
        colId: "st.date",
        field: "date",
        headerName: LL.SourceTrx.columns.date(),
        cellRenderer: (props) => (
          <AgDateCell {...props} isUTC timefix={props.data.timefix} />
        ),
        valueFormatter: ({ value }) =>
          dayjs(value).utc(true).local().format("DD/MM/YYYY HH:mm:ss"),
        filter: "agCustomDateColumnFilter",
        floatingFilter: true,
        sort: "asc",
      },
      {
        headerName: LL.SourceTrx.columns.buy(),
        children: [
          {
            colId: "buy.currency",
            field: "buyCurrency",
            headerName: LL.SourceTrx.columns.currency(),
            valueGetter: ({ data }) => data?.buyCurrency || data?.vCurrency,
            cellStyle: ({ data }) => !data?.buyCurrency && { opacity: 0.5 },
            cellRenderer: (props: ValueFormatterParams) =>
              NftCell(props, props.data?.buyNft),
            filter: "agSetColumnFilter",
            floatingFilter: true,
            filterParams: {
              values: ({ success }) => {
                graphRequest<
                  SourceTrx_Filter_RawFieldsQuery,
                  SourceTrx_Filter_RawFieldsQueryVariables
                >(SourceTrx_Filter_RawFieldsDocument, {
                  field: "currency",
                  side: "buy",
                }).then(({ sourceTrx_filter_rawFields }) => {
                  success(setFilter(sourceTrx_filter_rawFields));
                });
              },
              valueFormatter: ({ value }) => valueFormatter(LL, value),
            },
            onCellDoubleClicked: ({ api, data }) =>
              setFilterDoubleClick(api, "buy.currency", data.buyCurrency),
            minWidth: 80,
          },
          {
            colId: "buy.amount",
            field: "buyAmount",
            headerName: LL.SourceTrx.columns.amount(),
            valueGetter: ({ data }) => data?.buyAmount || data?.vAmount,
            cellStyle: ({ data }) => !data?.buyAmount && { opacity: 0.5 },
            valueFormatter: ({ value }) => formatNumber(value),
            filter: "agNumberColumnFilter",
            floatingFilter: true,
          },
          {
            colId: "buy.token",
            field: "buyToken",
            headerName: LL.SourceTrx.columns.token(),
            filter: "agTextColumnFilter",
            floatingFilter: true,
            onCellDoubleClicked: ({ api, data }) =>
              setFilterDoubleClick(api, "buy.token", data.buyToken),
            tooltipField: "buy.token" as "buyToken",
          },
        ],
      },
      {
        headerName: LL.SourceTrx.columns.sell(),
        children: [
          {
            colId: "sell.currency",
            field: "sellCurrency",
            headerName: LL.SourceTrx.columns.currency(),
            valueGetter: ({ data }) => data?.sellCurrency || data?.vCurrency,
            cellStyle: ({ data }) => !data?.sellCurrency && { opacity: 0.5 },
            cellRenderer: (props: ValueFormatterParams) =>
              NftCell(props, props.data?.sellNft),
            filter: "agSetColumnFilter",
            floatingFilter: true,
            filterParams: {
              values: ({ success }) => {
                graphRequest<
                  SourceTrx_Filter_RawFieldsQuery,
                  SourceTrx_Filter_RawFieldsQueryVariables
                >(SourceTrx_Filter_RawFieldsDocument, {
                  field: "currency",
                  side: "sell",
                }).then(({ sourceTrx_filter_rawFields }) => {
                  success(setFilter(sourceTrx_filter_rawFields));
                });
              },
              valueFormatter: ({ value }) => valueFormatter(LL, value),
            },
            onCellDoubleClicked: ({ api, data }) =>
              setFilterDoubleClick(api, "sell.currency", data.sellCurrency),
            minWidth: 80,
          },
          {
            colId: "sell.amount",
            field: "sellAmount",
            headerName: LL.SourceTrx.columns.amount(),
            valueGetter: ({ data }) => data?.sellAmount || data?.vAmount,
            cellStyle: ({ data }) => !data?.sellAmount && { opacity: 0.5 },
            valueFormatter: ({ value }) => formatNumber(value),
            filter: "agNumberColumnFilter",
            floatingFilter: true,
          },
          {
            colId: "sell.token",
            field: "sellToken",
            headerName: LL.SourceTrx.columns.token(),
            filter: "agTextColumnFilter",
            floatingFilter: true,
            onCellDoubleClicked: ({ api, data }) =>
              setFilterDoubleClick(api, "sell.token", data.sellToken),
            tooltipField: "sell.token" as "sellToken",
          },
        ],
      },
      {
        headerName: LL.SourceTrx.columns.fee(),
        children: [
          {
            colId: "fee.currency",
            field: "feeCurrency",
            headerName: LL.SourceTrx.columns.currency(),
            filter: "agSetColumnFilter",
            floatingFilter: true,
            filterParams: {
              values: ({ success }) => {
                graphRequest<
                  SourceTrx_Filter_RawFieldsQuery,
                  SourceTrx_Filter_RawFieldsQueryVariables
                >(SourceTrx_Filter_RawFieldsDocument, {
                  field: "currency",
                  side: "fee",
                }).then(({ sourceTrx_filter_rawFields }) => {
                  success(setFilter(sourceTrx_filter_rawFields));
                });
              },
              valueFormatter: ({ value }) => valueFormatter(LL, value),
            },
            onCellDoubleClicked: ({ api, data }) =>
              setFilterDoubleClick(api, "fee.currency", data.feeCurrency),
            minWidth: 80,
          },
          {
            colId: "fee.amount",
            field: "feeAmount",
            headerName: LL.SourceTrx.columns.amount(),
            valueFormatter: ({ value }) => formatNumber(value),
            filter: "agNumberColumnFilter",
            floatingFilter: true,
          },
          {
            colId: "fee.token",
            field: "feeToken",
            headerName: LL.SourceTrx.columns.token(),
            filter: "agTextColumnFilter",
            floatingFilter: true,
            onCellDoubleClicked: ({ api, data }) =>
              setFilterDoubleClick(api, "fee.token", data.feeToken),
            tooltipField: "fee.token" as "feeToken",
          },
        ],
      },
      {
        headerName: LL.SourceTrx.columns.idHash(),
        children: [
          {
            colId: "st.idHash",
            field: "idHash",
            headerName: LL.SourceTrx.columns.idHash(),
            filter: "agTextColumnFilter",
            floatingFilter: true,
            onCellDoubleClicked: ({ api, data }) =>
              setFilterDoubleClick(api, "st.idHash", data.idHash),
            tooltipField: "st.idHash" as "idHash",
          },
          {
            colId: "st.blockHeight",
            field: "blockHeight",
            headerName: "Block Height",
            columnGroupShow: "open",
            filter: "agTextColumnFilter",
            floatingFilter: true,
            onCellDoubleClicked: ({ api, data }) =>
              setFilterDoubleClick(api, "st.blockHeight", data.blockHeight),
            tooltipField: "st.blockHeight" as "blockHeight",
          },
        ],
      },
      {
        colId: "st.bitqueryMethod",
        field: "bitqueryMethod",
        headerName: LL.SourceTrx.columns.bitqueryMethod(),
        filter: "agSetColumnFilter",
        floatingFilter: true,
        filterParams: {
          values: ({ success }) => {
            graphRequest<
              SourceTrx_Filter_FieldsQuery,
              SourceTrx_Filter_FieldsQueryVariables
            >(SourceTrx_Filter_FieldsDocument, {
              field: "bitqueryMethod",
            }).then(({ sourceTrx_filter_fields }) => {
              success(setFilter(sourceTrx_filter_fields));
            });
          },
          valueFormatter: ({ value }) => valueFormatter(LL, value),
        },
        onCellDoubleClicked: ({ api, data }) =>
          setFilterDoubleClick(api, "st.bitqueryMethod", data.bitqueryMethod),
        tooltipField: "st.bitqueryMethod" as "bitqueryMethod",
      },
      {
        colId: "st.smartContract",
        field: "smartContract",
        headerName: LL.SourceTrx.columns.smartContract(),
        filter: "agTextColumnFilter",
        floatingFilter: true,
        onCellDoubleClicked: ({ api, data }) =>
          setFilterDoubleClick(api, "st.smartContract", data.smartContract),
        tooltipField: "st.smartContract" as "smartContract",
      },
      {
        colId: "st.sender",
        field: "sender",
        headerName: LL.SourceTrx.columns.sender(),
        filter: "agTextColumnFilter",
        floatingFilter: true,
        onCellDoubleClicked: ({ api, data }) =>
          setFilterDoubleClick(api, "st.sender", data.sender),
        tooltipField: "st.sender" as "sender",
      },
      {
        colId: "st.receiver",
        field: "receiver",
        headerName: LL.SourceTrx.columns.receiver(),
        filter: "agTextColumnFilter",
        floatingFilter: true,
        onCellDoubleClicked: ({ api, data }) =>
          setFilterDoubleClick(api, "st.receiver", data.receiver),
        tooltipField: "st.receiver" as "receiver",
      },
      {
        colId: "st.outlet",
        field: "outlet",
        headerName: "מוצא",
        filter: "agSetColumnFilter",
        floatingFilter: true,
        filterParams: {
          values: ({ success }) => success(setFilter(Object.values(Outlet))),
        },
        onCellDoubleClicked: ({ api, data }) =>
          setFilterDoubleClick(api, "st.outlet", data.outlet),
      },
      {
        colId: "st.source",
        field: "source",
        headerName: LL.SourceTrx.columns.source(),
        filter: "agSetColumnFilter",
        floatingFilter: true,
        valueFormatter: ({ value }) => LL.SourceType[value](),
        filterParams: {
          values: ({ success }) => success(Object.keys(LL.SourceType)),
          valueFormatter: ({ value }) => LL.SourceType[value](),
        },
        onCellDoubleClicked: ({ api, data }) =>
          setFilterDoubleClick(api, "st.source", data.source),
      },
      {
        colId: "st.comments",
        field: "comments",
        headerName: LL.SourceTrx.columns.comments(),
        filter: "agTextColumnFilter",
        floatingFilter: true,
        cellRenderer: AgTextboxCell,
        editable: true,
        singleClickEdit: true,
        onCellValueChanged: (e: NewValueParams) => {
          if (e.newValue === e.oldValue) return;
          notification.success({ message: "Success" });
          e.api.refreshServerSide();
        },
        tooltipField: "st.comments" as "comments",
      },
      {
        colId: "st.id",
        field: "id",
        headerName: "מזהה-BLX",
        filter: "agTextColumnFilter",
        floatingFilter: true,
        onCellDoubleClicked: ({ api, data }) =>
          setFilterDoubleClick(api, "st.id", data.id),
      },
    ],
    []
  );

  const getContextMenuItems = useCallback(
    (params: GetContextMenuItemsParams<ISourceTrx>) => {
      params.node?.setSelected(true);

      const menuItems: (DefaultMenuItem | MenuItemDef)[] = [
        "copy",
        copyId({ LL, params }),
        "separator",
        resetFilters({ params, LL }),
        fitColumns({ params, LL }),
        autoSizeColumns({ params, LL }),
        refreshData({
          action: () => params.api.refreshServerSide({ purge: true }),
          LL,
        }),
      ];

      return menuItems;
    },
    [window]
  );

  const getRowStyle = useCallback(({ data }: RowClassParams<ISourceTrx>) => {
    if (data?.isIgnored) {
      return { backgroundColor: "#BDBDBD" };
    }
    if (data?.isExcluded) {
      return { backgroundColor: "#e57373" };
    }
    if (!!data?.trxTag) {
      return {
        backgroundColor: data.trxTag,
        color: `lch(from ${data.trxTag} calc((49.44 - l) * infinity) 0 0)`,
      };
    }
  }, []);

  const statusBar = useMemo(
    () => ({
      statusPanels: [
        {
          statusPanel: "agSelectedRowCountComponent",
          align: "left",
        },
        {
          statusPanel: "agAggregationComponent",
          align: "right",
          statusPanelParams: {
            aggFuncs: ["count", "sum", "min", "max", "avg"],
            valueFormatter: ({ value }) => formatNumber(value),
          },
        },
      ],
    }),
    []
  );

  const sideBar = useMemo(
    () => ({
      toolPanels: [
        {
          id: "columns",
          labelDefault: "Columns",
          labelKey: "columns",
          iconKey: "columns",
          toolPanel: "agColumnsToolPanel",
          toolPanelParams: {
            suppressRowGroups: true,
            suppressValues: true,
            suppressPivots: true,
            suppressPivotMode: true,
          },
        },
      ],
    }),
    []
  );

  return (
    <div className="w-[97%] h-full flex flex-col">
      <div className="flex-grow mt-5">
        <AgTable<ISourceTrx>
          agRef={gridRef}
          columnDefs={columnDefs}
          defaultColDef={{
            resizable: true,
            suppressMovable: false,
          }}
          rowModelType="serverSide"
          pagination
          onGridReady={onGridReady}
          suppressAggFuncInHeader
          rowSelection={{
            mode: "multiRow",
            checkboxes: true,
            headerCheckbox: false,
          }}
          getContextMenuItems={getContextMenuItems}
          getRowStyle={getRowStyle}
          statusBar={statusBar}
          sideBar={sideBar}
          rowNumbers
        />
      </div>
    </div>
  );
};

export default SourceTrx;
