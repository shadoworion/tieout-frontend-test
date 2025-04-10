import { Helmet } from "react-helmet";

type Props = {
  locale: string;
};

export const Headers = ({ locale }: Props) => {
  return (
    <Helmet>
      <html lang={locale} dir={locale === "he" ? "rtl" : "ltr"} />
      <title>Tieout</title>
    </Helmet>
  );
};
