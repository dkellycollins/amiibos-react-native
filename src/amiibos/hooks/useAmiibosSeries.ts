import useAmiibos from "./useAmiibos";

export default function useAmiibosSeries(): Array<string> {
  const amiibos = useAmiibos();

  return amiibos
    .map(amiibo => amiibo.series.displayName || amiibo.displayName)
    .filter((series, index, array) => array.indexOf(series) === index);
}