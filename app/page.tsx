"use client";

import { QrcodeSuccessCallback } from "html5-qrcode";
import HTML5QRCodePlugin from "./components/HTML5QRCodePlugin";

export default function Home() {
  const onNewScanResult: QrcodeSuccessCallback = (
    decodedText,
    decodedResult,
  ) => {
    alert(decodedText);
  };

  return (
    <main>
      <HTML5QRCodePlugin
        fps={60}
        qrbox={480}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />
    </main>
  );
}
