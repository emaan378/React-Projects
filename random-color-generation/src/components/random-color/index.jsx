import { useEffect, useState } from "react"
export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setcolor] = useState('#000000');
    function randomColorUtility(length) {
        return Math.floor(Math.random() *length)
    }
    function handleCreateRandomHexColor() {
        // hex color start with #followed by six number like #000000;
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        // console.log(hexColor);
        setcolor(hexColor);
    }
    function handleCreateRandomRgbColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        setcolor(`rgb(${r},${g},${b})`)
        
    }
    useEffect(() => {
        if (typeOfColor === 'rgb') handleCreateRandomRgbColor()
        else handleCreateRandomHexColor()
    }, [typeOfColor])
    

    return (
        <div style={{
            background: color,
            height: '100vh',
            width: '100vw',
            textAlign:"center"
            
        }}>
            <button
                onClick={() => { setTypeOfColor("hex") }}
            >Create Hex Color</button>
            <button
                onClick={() => { setTypeOfColor("rgb") }}
            >Create RGB Color</button>
            <button onClick={typeOfColor === "hex" ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontsize: '60px',
                margintop: '50px',
                flexDirection: 'column',
                gap:'20px'

            }}>
                <h3>{typeOfColor ==="rgb"? 'RGB Color':'HEX Color'}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}