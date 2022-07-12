import axios from "axios";

export async function getTodayStatus(){
  return axios.get('/api/getTodayStatus')
}
