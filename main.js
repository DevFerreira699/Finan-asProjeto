// ========== VARIÁVEIS GLOBAIS ==========
let receitas = [], despesas = [], investimentos = [], dependentes = [];
let currentUser = null;
let balancesHidden = false;
let graficoEvolucao, graficoDespesasCat, graficoDashboardCat;

const stocks = [
    { symbol: "PETR4", name: "Petrobras", price: 38.42, change: 1.25 },
    { symbol: "VALE3", name: "Vale", price: 62.18, change: -0.87 },
    { symbol: "ITUB4", name: "Itaú Unibanco", price: 33.75, change: 0.54 },
    { symbol: "BBDC4", name: "Bradesco", price: 15.23, change: -0.32 },
    { symbol: "ABEV3", name: "Ambev", price: 12.45, change: 0.18 },
    { symbol: "WEGE3", name: "Weg", price: 41.92, change: 1.42 },
    { symbol: "RENT3", name: "Localiza", price: 52.30, change: -0.95 },
    { symbol: "MGLU3", name: "Magazine Luiza", price: 8.75, change: -2.15 }
];

const news = [
    { title: "Ibovespa fecha em alta com expectativa de cortes de juros", date: "Hoje", source: "InfoMoney" },
    { title: "Petrobras anuncia novo investimento de R$ 20 bi no pré-sal", date: "Ontem", source: "Valor Econômico" },
    { title: "Mercado imobiliário cresce 15% no primeiro trimestre", date: "Ontem", source: "Estadão" },
    { title: "Dicas de investimento: como montar uma carteira diversificada", date: "2 dias atrás", source: "Exame" },
    { title: "FIIs apresentam rendimento médio de 12% ao ano", date: "3 dias atrás", source: "Suno" },
    { title: "Tesouro Direto: novas regras entram em vigor em maio", date: "3 dias atrás", source: "UOL Economia" }
];

// ========== FUNÇÕES AUXILIARES ==========
function totalGastoDependentes() {
    return dependentes.reduce
}