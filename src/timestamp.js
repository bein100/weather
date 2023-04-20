function unix(dt, type) {
    const milliseconds = dt * 1000
    const data = new Date(milliseconds)
    let result = 
    type == 'weekday' ? data.toLocaleString("ru-RU", { weekday: "short"}) :
    type == 'month' ? data.toLocaleString("ru-RU", { month: "short"}) :
    type == 'day' ? data.toLocaleString("ru-RU", { day: "numeric"}) : 
    type == 'hour' ? data.toLocaleString("ru-RU", { hour: "2-digit"}) :
    type == 'minute' ? data.toLocaleString("ru-RU", { minute: "2-digit"}) : ''
    return result
}

export default unix