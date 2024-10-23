
class Agenda{

        private _id: number = 0;
        private _nome: string = "";
        private _especialidade: string = "";
        private _horariosDisponiveis: string[] = [];
        
      
        public get get_id(): number {
          return this._id;
        }
      
        public set set_id(value: number) {
          this._id = value;
        }
      
        public get get_nome(): string {
          return this._nome;
        }
      
        public set set_nome(value: string) {
          this._nome = value;
        }
      
        public get get_especialidade(): string {
          return this._especialidade;
        }
      
        public set set_especialidade(value: string) {
          this._especialidade = value;
        }
      
        // Getter e Setter para 'horariosDisponiveis'
        public get get_horariosDisponiveis(): string[] {
          return this._horariosDisponiveis;
        }
      


        public listAgendas(): string{

          const Agendas =  [{
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

        };    
        
        public cadAgendas(): string{

          const cadAgenda =  [{

            "mensagem": "Agendamento realizado com sucesso",
            "agendamento": {
              "medico": "Dr. João Silva",
              "paciente": "Carlos Almeida",
              "data_horario": "2024-10-05 09:00"
            }
          }
          
          ];

          return JSON.stringify(cadAgenda);

        };  

};

export const classAgendas = Agenda;
