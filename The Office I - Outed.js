function outed(meet, boss, a = Object.keys(meet)){
 
    return  (a.reduce((acc, el) => acc + meet[el],0) + meet[boss]) / a.length > 5 ? 'Nice Work Champ!' : 'Get Out Now!' 
    
    }