import { AmiiboModel } from "../models/AmiiboModel";

export default function useAmiibos(): Array<AmiiboModel> {
  return require('../../../assets/amiibos.json') as Array<AmiiboModel>;
}