import React, { useEffect, useState } from "react";
import { App, Typography } from "antd";
import { BsUpload } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";

const { Text } = Typography;

type Props = {
  fileTypes: string[];
  onDrop: (files: FileList) => Promise<void>;
};

export const UploadOverlay = ({ fileTypes, onDrop }: Props) => {
  const { notification } = App.useApp();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <div
      className="absolute w-full h-full bg-gray-200 border border-dashed border-gray-400 z-50 flex flex-col justify-center items-center children:my-5"
      onDragEnter={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      onDragOver={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      onDrop={async (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          const filesArray = Array.from(e.dataTransfer.files);
          for (const file of filesArray) {
            if (file.size > 100 * 1024 * 1024) {
              notification.warning({ message: "אחד מהקבצים שבחרת גדול מידי" });
              e.dataTransfer.clearData();
              return;
            }
            if (fileTypes.length > 0 && !fileTypes.includes(file.type)) {
              notification.warning({
                message: "אחד מהקבצים שבחרת אינו תואם את הסוג המאושר",
              });
              e.dataTransfer.clearData();
              return;
            }
          }
          setIsLoading(true);
          await onDrop(e.dataTransfer.files);
          e.dataTransfer.clearData();
        }
      }}
    >
      {isLoading ? (
        <>
          <CgSpinner className="animate-spin" size="3rem" color="#7F56D9" />
          <Text>הכנת קבצים</Text>
        </>
      ) : (
        <>
          <BsUpload size="3rem" />
          <Text>גררו את הקבצים לאזור זה</Text>
        </>
      )}
    </div>
  );
};
