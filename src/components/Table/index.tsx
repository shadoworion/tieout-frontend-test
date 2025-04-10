import React, { useMemo } from "react";
import cx from "classnames";
import { AgGridReact } from "ag-grid-react";
import { AllEnterpriseModule, LicenseManager } from "ag-grid-enterprise";
import { AG_GRID_LOCALE_IL } from "./locales/he";
import { AG_GRID_LOCALE_EN } from "./locales/en";
import {
  ColDef,
  ColGroupDef,
  ColumnMovedEvent,
  ColumnResizedEvent,
  ColumnVisibleEvent,
  FirstDataRenderedEvent,
  GetContextMenuItemsParams,
  GetRowIdParams,
  GridReadyEvent,
  IsFullWidthRowParams,
  MenuItemDef,
  PaginationChangedEvent,
  RowClassParams,
  RowClassRules,
  RowDataUpdatedEvent,
  RowDoubleClickedEvent,
  RowDragEvent,
  RowGroupingDisplayType,
  RowHeightParams,
  RowModelType,
  RowStyle,
  SelectionChangedEvent,
  SideBarDef,
  StatusPanelDef,
  TreeDataDisplayType,
  FilterChangedEvent,
  RowClickedEvent,
  CellClickedEvent,
  ExcelStyle,
  CellEditingStoppedEvent,
  CellEditingStartedEvent,
  GetMainMenuItems,
  GetContextMenuItems,
  ModuleRegistry,
  themeQuartz,
  colorSchemeDark,
  colorSchemeLight,
  RowSelectionOptions,
  CellSelectionOptions,
  SelectAllMode,
  DefaultMenuItem,
  RowNumbersOptions,
  IServerSideDatasource,
} from "ag-grid-community";
import { useI18nContext } from "../../i18n/i18n-react";
import { AgGroupRow } from "./commons/groupRow";
import {
  autoSizeColumns,
  fitColumns,
  resetFilters,
} from "./commons/contextMenu";
import CustomDateColumnFilter from "./commons/CustomDateColumnFilter";

LicenseManager.setLicenseKey(String(import.meta.env.VITE_AGGRID_LICENCE));
ModuleRegistry.registerModules([AllEnterpriseModule]);

type Props<T = any> = {
  agRef?: React.Ref<AgGridReact<T>>;
  debug?: boolean;
  localeOverwrite?: "he" | "en";
  themeMode?: "light" | "dark";
  columnDefs: (ColDef<T> | ColGroupDef<T>)[];
  defaultColDef?: ColDef<T>;
  rowData?: T[];
  serverSideDatasource?: IServerSideDatasource<T>;
  onGridReady?: (event: GridReadyEvent<T>) => void;
  rowModelType?: RowModelType;
  rowSelection?: Partial<RowSelectionOptions<T>>;
  getContextMenuItems?: GetContextMenuItems<T>;
  onSelectionChanged?: (e: SelectionChangedEvent<T>) => void;
  treeData?: boolean;
  treeDataDisplayType?: TreeDataDisplayType;
  getDataPath?: (data: T) => string[];
  isServerSideGroup?: (dataItem: T) => boolean;
  getServerSideGroupKey?: (dataItem: T) => string;
  autoGroupColumnDef?: ColDef<T> | ColGroupDef<T>;
  getMainMenuItems?: GetMainMenuItems<T>;
  rowClassRules?: RowClassRules<T>;
  getRowStyle?: (params: RowClassParams<T>) => RowStyle;
  getRowClass?: (params: RowClassParams<T>) => string;
  getRowId?: (params: GetRowIdParams<T>) => string;
  sideBar?: SideBarDef | string | boolean | null;
  fullWidthCellRenderer?: any;
  isFullWidthRow?: (params: IsFullWidthRowParams<T>) => boolean;
  getRowHeight?: (params: RowHeightParams<T>) => number;
  context?: any;
  rowGroupPanelShow?: "always" | "onlyWhenGrouping" | "never";
  statusBar?: {
    statusPanels: StatusPanelDef[];
  };
  enableCellTextSelection?: boolean;
  suppressGroupRowsSticky?: boolean;
  onRowDoubleClicked?: (e: RowDoubleClickedEvent<T>) => void;
  pinnedTopRowData?: T[];
  rowDragManaged?: boolean;
  onRowDragEnd?: (event: RowDragEvent<T>) => void;
  pagination?: boolean;
  paginationPageSize?: number;
  cacheBlockSize?: number;
  onPaginationChanged?: (event: PaginationChangedEvent<T>) => void;
  noRowsOverlayComponent?: any;
  noRowsOverlayComponentParams?: any;
  undoRedoCellEditing?: boolean;
  suppressCellFocus?: boolean;
  groupDisplayType?: RowGroupingDisplayType;
  groupRowRendererParams?: any;
  onFirstDataRendered?: (event: FirstDataRenderedEvent<T>) => void;
  masterDetail?: boolean;
  detailCellRendererParams?: any;
  onRowDataUpdated?: (event: RowDataUpdatedEvent<T>) => void;
  suppressAggFuncInHeader?: boolean;
  onColumnVisible?: (event: ColumnVisibleEvent<T>) => void;
  onColumnResized?: (event: ColumnResizedEvent<T>) => void;
  onColumnMoved?: (event: ColumnMovedEvent<T>) => void;
  suppressServerSideFullWidthLoadingRow?: boolean;
  onFilterChanged?: (event: FilterChangedEvent<T>) => void;
  onRowClicked?: (event: RowClickedEvent<T>) => void;
  onCellClicked?: (event: CellClickedEvent<T>) => void;
  detailRowAutoHeight?: boolean;
  excelStyles?: ExcelStyle[];
  onCellEditingStarted?: (event: CellEditingStartedEvent<T>) => void;
  onCellEditingStopped?: (event: CellEditingStoppedEvent<T>) => void;
  cellSelection?: boolean | CellSelectionOptions<T>;
  rowNumbers?: boolean | RowNumbersOptions;
  loading?: boolean;
  className?: string;
};

export const defaultGridOptions = () => {
  const { locale, LL } = useI18nContext();

  const getLocale = () => {
    return {
      localeText: locale === "he" ? AG_GRID_LOCALE_IL : AG_GRID_LOCALE_EN,
      enableRtl: locale === "he",
    };
  };

  return {
    enableRtl: getLocale().enableRtl,
    localeText: getLocale().localeText,
    rowHeight: 45,
    animateRows: true,
    suppressCsvExport: true,
    stopEditingWhenCellsLoseFocus: true,
    onGridReady: (params) => {
      window.onresize = () => {
        params.api.sizeColumnsToFit();
      };
    },
    onFirstDataRendered: (params) => {
      params.api.sizeColumnsToFit();
    },
    defaultColDef: {
      suppressMovable: true,
      suppressHeaderMenuButton: true,
      sortable: true,
      filterParams: {
        excelMode: "windows",
        buttons: ["reset", "apply"],
      },
    },
    getRowId: (params) => (params.data as any).id,
    getContextMenuItems: (params: GetContextMenuItemsParams) => {
      const menuItems: (DefaultMenuItem | MenuItemDef)[] = [
        "copy",
        "separator",
        fitColumns({ params, LL }),
        autoSizeColumns({ params, LL }),
        resetFilters({ params, LL }),
      ];
      return menuItems;
    },
  };
};

export function AgTable<T = any>({
  agRef,
  debug = false,
  localeOverwrite,
  themeMode = "light",
  columnDefs,
  defaultColDef,
  rowData,
  serverSideDatasource,
  onGridReady,
  rowModelType = "clientSide",
  rowSelection,
  getContextMenuItems = () => [],
  onSelectionChanged,
  treeData = false,
  treeDataDisplayType = "auto",
  getDataPath,
  isServerSideGroup,
  getServerSideGroupKey,
  autoGroupColumnDef,
  getMainMenuItems = () => [],
  rowClassRules,
  getRowStyle,
  getRowClass,
  getRowId,
  sideBar,
  fullWidthCellRenderer,
  isFullWidthRow,
  getRowHeight,
  context,
  rowGroupPanelShow = "never",
  statusBar,
  enableCellTextSelection = false,
  suppressGroupRowsSticky = true,
  onRowDoubleClicked,
  pinnedTopRowData,
  rowDragManaged = false,
  onRowDragEnd,
  pagination = false,
  paginationPageSize = 1000,
  cacheBlockSize = 100,
  onPaginationChanged,
  noRowsOverlayComponent,
  noRowsOverlayComponentParams,
  undoRedoCellEditing = false,
  suppressCellFocus = true,
  groupDisplayType,
  groupRowRendererParams,
  onFirstDataRendered,
  masterDetail = false,
  detailCellRendererParams,
  onRowDataUpdated,
  suppressAggFuncInHeader = false,
  onColumnVisible,
  onColumnResized,
  onColumnMoved,
  suppressServerSideFullWidthLoadingRow = true,
  onFilterChanged,
  onRowClicked,
  onCellClicked,
  detailRowAutoHeight = false,
  excelStyles,
  onCellEditingStarted,
  onCellEditingStopped,
  cellSelection = true,
  rowNumbers = false,
  loading = false,
  className,
}: Props<T>) {
  const { locale } = useI18nContext();

  const theme = themeQuartz
    .withPart(themeMode === "light" ? colorSchemeLight : colorSchemeDark)
    .withParams({
      fontFamily: ["Rubik", "sans-serif"],
      fontSize: "16px",
      accentColor: "#7f56d9",
    });

  const getLocale = () => {
    if (localeOverwrite) {
      return {
        localeText:
          localeOverwrite === "he" ? AG_GRID_LOCALE_IL : AG_GRID_LOCALE_EN,
        enableRtl: localeOverwrite === "he",
      };
    }
    return {
      localeText: locale === "he" ? AG_GRID_LOCALE_IL : AG_GRID_LOCALE_EN,
      enableRtl: locale === "he",
    };
  };

  const colDef = useMemo<ColDef<T>>(
    () => ({
      suppressMovable: true,
      suppressHeaderMenuButton: true,
      sortable: true,
      filterParams: {
        excelMode: "windows",
        buttons: ["reset", "apply"],
      },
      ...defaultColDef,
    }),
    [defaultColDef]
  );

  const rowSelectionDef = useMemo<RowSelectionOptions<T>>(
    () => ({
      mode: "singleRow",
      enableClickSelection: true,
      selectAll: "filtered" as SelectAllMode,
      ...rowSelection,
    }),
    [rowSelection]
  );

  const defaultGroupRowRendererParams = useMemo(() => {
    return {
      innerRenderer: AgGroupRow,
      suppressCount: true,
    };
  }, []);

  return (
    <div className={cx("h-full w-full", className)}>
      <AgGridReact<T>
        ref={agRef}
        debug={debug}
        theme={theme}
        enableRtl={getLocale().enableRtl}
        localeText={getLocale().localeText}
        className={cx("h-full", className)}
        rowHeight={45}
        animateRows
        suppressCsvExport
        enableCellTextSelection={enableCellTextSelection}
        suppressCellFocus={suppressCellFocus}
        rowData={rowData}
        serverSideDatasource={serverSideDatasource}
        onGridReady={onGridReady}
        onFirstDataRendered={onFirstDataRendered}
        columnDefs={columnDefs}
        defaultColDef={colDef}
        rowModelType={rowModelType}
        rowSelection={rowSelectionDef}
        getContextMenuItems={getContextMenuItems}
        onSelectionChanged={onSelectionChanged}
        treeData={treeData}
        treeDataDisplayType={treeDataDisplayType}
        getDataPath={getDataPath}
        isServerSideGroup={isServerSideGroup}
        getServerSideGroupKey={getServerSideGroupKey}
        autoGroupColumnDef={autoGroupColumnDef}
        getMainMenuItems={getMainMenuItems}
        rowClassRules={rowClassRules}
        getRowStyle={getRowStyle}
        getRowClass={getRowClass}
        sideBar={sideBar}
        fullWidthCellRenderer={fullWidthCellRenderer}
        isFullWidthRow={isFullWidthRow}
        context={context}
        getRowHeight={getRowHeight}
        rowGroupPanelShow={rowGroupPanelShow}
        statusBar={statusBar}
        suppressGroupRowsSticky={suppressGroupRowsSticky}
        onRowDoubleClicked={onRowDoubleClicked}
        pinnedTopRowData={pinnedTopRowData}
        rowDragManaged={rowDragManaged}
        onRowDragEnd={onRowDragEnd}
        pagination={pagination}
        paginationPageSize={paginationPageSize}
        cacheBlockSize={cacheBlockSize}
        onPaginationChanged={onPaginationChanged}
        noRowsOverlayComponent={noRowsOverlayComponent}
        noRowsOverlayComponentParams={noRowsOverlayComponentParams}
        getRowId={
          getRowId ? getRowId : (params) => String((params.data as any).id)
        }
        undoRedoCellEditing={undoRedoCellEditing}
        groupDisplayType={groupDisplayType}
        groupRowRendererParams={
          groupRowRendererParams || defaultGroupRowRendererParams
        }
        multiSortKey="ctrl"
        masterDetail={masterDetail}
        detailCellRendererParams={detailCellRendererParams}
        onRowDataUpdated={onRowDataUpdated}
        suppressAggFuncInHeader={suppressAggFuncInHeader}
        components={{
          agCustomDateColumnFilter: CustomDateColumnFilter,
        }}
        onColumnVisible={onColumnVisible}
        onColumnMoved={onColumnMoved}
        onColumnResized={onColumnResized}
        paginationPageSizeSelector={[1000, 5000, 10000]}
        autoSizeStrategy={{
          type: "fitGridWidth",
        }}
        suppressServerSideFullWidthLoadingRow={
          suppressServerSideFullWidthLoadingRow
        }
        onFilterChanged={onFilterChanged}
        onRowClicked={onRowClicked}
        onCellClicked={onCellClicked}
        detailRowAutoHeight={detailRowAutoHeight}
        excelStyles={excelStyles}
        onCellEditingStarted={onCellEditingStarted}
        onCellEditingStopped={onCellEditingStopped}
        cellSelection={cellSelection}
        rowNumbers={
          !!rowNumbers
            ? {
                minWidth: 65,
                width: 65,
                resizable: true,
                maxWidth: 150,
                ...(typeof rowNumbers === "object" ? rowNumbers : {}),
              }
            : false
        }
        loading={loading}
      />
    </div>
  );
}
