import React from 'react';
import './qr.css';
import { IoMdArrowBack, IoMdShare, IoMdQrScanner } from 'react-icons/io';
import {MdQrCode2, MdQrCodeScanner} from 'react-icons/md';
import {AiOutlineScan} from 'react-icons/ai';

export default function Qr() {
  return (
    <div className='qr'>
        <div className='qr-content'>
        <div className="row topbar">
            <div className="col-4">
                <a href='/'>
                    <IoMdArrowBack className='back' size={25} />
                </a>
            </div>
            <div className="col-4">
                <h2 className='title'>My QR</h2>
            </div>
            <div className="col-4">
                <IoMdShare className='share' size={25} />
            </div>
        </div>

        <div className="row profil">
            <div className="col-4">
                <img className='profile' src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/d07bca98931623.5ee79b6a8fa55.jpg' width={50}></img>
            </div>
            <div className="col-7 nameprofil">
                <h3 className='title-profile'>Profile Name</h3>
                <h2 className='name'>Blaze John</h2>
            </div>
        </div>

        <div className="row code-qr">
            <div className="col-6 qr-code scan-code">
                <AiOutlineScan size={25} />
                <h6 className='scan'>Scan QR Code</h6>
            </div>
            <div className="col-6 qr-code my-code">
                <MdQrCode2 size={25} />
                <h6 className='scan'>My QR Code</h6>
            </div>
        </div>
        </div>
        
        <div className='scanner'>
            <MdQrCode2 size={200}/>
            <div className="row tips">
            <div className="col-3">
                <div className='img-tips'>
                    <img src='https://cdn3d.iconscout.com/3d/premium/thumb/lamp-3260444-2725137.png' width={40}></img>
                </div>
            </div>
            <div className="col-8 tips-word">
                <p className='tips-desc'>Show the QR Code and scan to proced transaction.</p>
            </div>
        </div>
        </div>

        

    </div>
  )
}
