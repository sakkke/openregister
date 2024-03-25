"use client";

import { QrcodeSuccessCallback } from "html5-qrcode";
import HTML5QRCodePlugin from "./components/HTML5QRCodePlugin";
import { useState } from "react";

export default function Home() {
  const [decodedTexts, setDecodedTexts] = useState<string[]>([]);
  const onNewScanResult: QrcodeSuccessCallback = (
    decodedText,
    decodedResult,
  ) => {
    setDecodedTexts(currentDecodedTexts => [
      decodedText,
      ...currentDecodedTexts,
    ]);
  };

  return (
    <main>
      <HTML5QRCodePlugin
        fps={60}
        qrbox={240}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />
      <ul>
        {decodedTexts.map(decodedText => (
          <li>{decodedText}</li>
        ))}
      </ul>
    </main>
  );
}
