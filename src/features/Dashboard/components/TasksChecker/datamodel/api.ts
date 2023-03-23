import axios from 'axios'
import { parseResponse } from './utils'

export const getTasks = async () => {
  const url =
    'https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress'
  const { data } = await axios.get(url)
  const parsedResponse = parseResponse(data)

  return parsedResponse
}
