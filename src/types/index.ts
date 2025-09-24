export type GLPISessionResponse = {
  session_token: string
}

export type Task = {
  totalcount: number;
  count: number;
  content: string;
  date: string;
}

export type EntitiesType = {
  id: number;
  name: string;
};

export type TicketRaw = {
  id: number;
  entities_id: number;   
  name: string;          
  content: string;     
  date: string;
};
