function premierLeagueStandings(teamStandings) {
    let arr= Object.values(teamStandings)
  let first = arr.shift()
  arr=arr.sort((a,b)=>a.localeCompare(b))
  arr = [first].concat(arr)
  let obj={};
  arr.map((v,i)=>obj[i+1]=arr[i])
  return obj
}