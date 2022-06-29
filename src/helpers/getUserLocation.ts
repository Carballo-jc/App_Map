

export const getUserLocation = async(): Promise<[number, number]> =>{
    return new Promise((resolver, reject) => {
        navigator.geolocation.getCurrentPosition(
            ({coords}) => {
                resolver([coords.latitude, coords.longitude])
            },
            (error) => {
                alert('No se pudo obtener la geolocalización');
                console.log(error);
                reject()
            }
        )
    })
}