import { useState } from 'react'
import QRCode from 'react-qr-code'
import './style.css'
export default function QRCodeGenerator() {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');
    function handleGenerateQrCode() {
        setQrCode(input);
        setInput('')
    }
    return (
        <div className='qr-code-container'> 
            <h1>QR CODE GENERATOR</h1>
            <div>
                <input type="text" name="qr-code"
                    value={input}
                onChange={(e)=>setInput(e.target.value)}    placeholder="Enter your value here" />
                <button
                    disabled={input && input.trim()!==''?false:true}
                    onClick={handleGenerateQrCode}>Generator</button>
            </div>
            <div>
                <QRCode
                    id='qr-code-value'
                    value={qrCode}
                size={300}/>
            </div>
        </div>
    )
}