import { formatarData } from "../utils/formatters.js";
import { formatarMoeda } from "../utils/formatters.js";
export var FormatoData;
(function (FormatoData) {
    FormatoData["PADRAO"] = "DD/MM/AAAA";
    FormatoData["DIA_SEMANA_DIA_MES_ANO"] = "DIA_SEMANA, DD/MM/AAAA";
    FormatoData["DIA_MES"] = "DD/MM";
})(FormatoData || (FormatoData = {}));
export function formatarInformacoes(valor, data, formatoData) {
    const valorFormatado = formatarMoeda(valor);
    const dataFormatada = formatarData(data, formatoData);
    return `${dataFormatada} - ${valorFormatado}`;
}
