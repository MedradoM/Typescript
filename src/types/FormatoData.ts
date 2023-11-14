import { formatarData } from "../utils/formatters.js";
import { formatarMoeda } from "../utils/formatters.js";

export enum FormatoData {
    PADRAO = "DD/MM/AAAA",
    DIA_SEMANA_DIA_MES_ANO = "DIA_SEMANA, DD/MM/AAAA",
    DIA_MES = "DD/MM"
}

export function formatarInformacoes(valor: number, data: Date, formatoData: FormatoData): string {
    const valorFormatado = formatarMoeda(valor);
    const dataFormatada = formatarData(data, formatoData);
    return `${dataFormatada} - ${valorFormatado}`;
}