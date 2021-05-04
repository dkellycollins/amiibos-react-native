import { AmiiboModel } from "../models/AmiiboModel";

const amiibos = require('../../../assets/amiibos.json') as Array<AmiiboModel>

export interface AmiibosOptions {
  series?: string;
}

export default function useAmiibos(opt: AmiibosOptions = {}): Array<AmiiboModel> {
  if (!!opt.series) {
    return amiibos.filter(amiibo => amiibo.series.displayName === opt.series);
  }

  return amiibos;
}