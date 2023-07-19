export interface Sala {
  espacoId: string;
  inventarioId: number;
  quantidadePatrimonios: number;
  patrimoniosLidos: number;
  status: number;
  espaco: {
    id: string;
    nome: string;
    createdAt: Date;
  };
  responsavel: {
    id: number;
    nome: string;
    createdAt: Date;
    updatedAt: Date;
  };
  inventario: {
    status: number;
  };
}
