type TravelData = {
    id: number,
    passenger_name: string,
    passenger_avatar: string,
    origin: string,
    destination: string,
}

type transformedData = {
    title: string,
    data: TravelData[]
}


export function transformData (data: TravelData[]):transformedData[] {
    let allLocations:string[] = []

    data.forEach((n) => {
        if(!allLocations.includes(n.destination)) {
            allLocations.push(n.destination)
        }
    
        if(!allLocations.includes(n.origin)) {
            allLocations.push(n.origin)
        }      
    })

    return allLocations.sort().map((location) => {
        return {
            title: location,
            data: data.filter((item) => item.destination === location || item.origin === location)
        }
    })
}