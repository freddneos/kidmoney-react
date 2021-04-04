export default function convertKoins(koins: number): string {
    return (new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(koins)).replace('R$', 'K$')
}