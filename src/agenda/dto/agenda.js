"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classAgendas = void 0;
class Agenda {
    constructor() {
        this._id = 0;
        this._nome = "";
        this._especialidade = "";
        this._horariosDisponiveis = [];
    }
    /*
    constructor(id: number, nome: string, especialidade: string, horariosDisponiveis: string[]) {
      this._id = id;
      this._nome = nome;
      this._especialidade = especialidade;
      this._horariosDisponiveis = horariosDisponiveis;
    }
    */
    get get_id() {
        return this._id;
    }
    set set_id(value) {
        this._id = value;
    }
    get get_nome() {
        return this._nome;
    }
    set set_nome(value) {
        this._nome = value;
    }
    get get_especialidade() {
        return this._especialidade;
    }
    set set_especialidade(value) {
        this._especialidade = value;
    }
    // Getter e Setter para 'horariosDisponiveis'
    get get_horariosDisponiveis() {
        return this._horariosDisponiveis;
    }
    listAgendas() {
        const Agendas = [{
                "medicos": [
                    {
                        "id": 1,
                        "nome": "Dr. João Silva",
                        "especialidade": "Cardiologista",
                        "horarios_disponiveis": [
                            "2024-10-05 09:00",
                            "2024-10-05 10:00",
                            "2024-10-05 11:00"
                        ]
                    },
                    {
                        "id": 2,
                        "nome": "Dra. Maria Souza",
                        "especialidade": "Dermatologista",
                        "horarios_disponiveis": [
                            "2024-10-06 14:00",
                            "2024-10-06 15:00"
                        ]
                    }
                ]
            }];
        return JSON.stringify(Agendas);
    }
    ;
    cadAgendas() {
        const Agendas = [{
                "mensagem": "Agendamento realizado com sucesso",
                "agendamento": {
                    "medico": "Dr. João Silva",
                    "paciente": "Carlos Almeida",
                    "data_horario": "2024-10-05 09:00"
                }
            }
        ];
        return JSON.stringify(Agendas);
    }
    ;
}
;
exports.classAgendas = Agenda;
