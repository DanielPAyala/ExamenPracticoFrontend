export interface Employee {
  dni: number;
  tipoTrabajador: number;
  sueldo: number;
}

export function TipoTrabajador() {
  return {
    0: 'Obrero',
    1: 'Supervisor',
    2: 'Gerente',
  };
}
