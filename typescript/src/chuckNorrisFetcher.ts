import fetch from "node-fetch";
import { Compiler } from 'ts-import';
import * as _ from "lodash";
_.groupBy()
interface IChuckNorris{
    id: string,
    created_at: string,
    value: string,
    icon_url: string,
    updated_at: string,
    url: string
}


function chuckNorrisFetcher(): Promise<IChuckNorris>{
    return fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(data => data )
  }
  
  async function chuckNorrisTester() {
    let joke = await chuckNorrisFetcher()
    console.log(joke.value + " " + joke.url)
  }
  
  chuckNorrisTester();