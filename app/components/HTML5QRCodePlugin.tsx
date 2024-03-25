'use client'

import {
  Html5QrcodeScanner,
  QrcodeErrorCallback,
  QrcodeSuccessCallback,
} from 'html5-qrcode'
import { useEffect } from 'react'

const qrCodeRegionId = 'html5-qr-code-full-region'

interface Config {
  fps: number
  qrbox?: number
  aspectRatio?: number
  disableFlip?: boolean
}

interface Props extends Config {
  verbose?: boolean
  qrCodeSuccessCallback: QrcodeSuccessCallback
  qrCodeErrorCallback?: QrcodeErrorCallback
}

const createConfig = (props: Props): Config => {
  const { fps, qrbox, aspectRatio, disableFlip } = props
  const config: Config = { fps, qrbox, aspectRatio, disableFlip }
  return config
}

export default function HTML5QRCodePlugin(props: Props) {
  useEffect(() => {
    const config = createConfig(props)
    const verbose = props.verbose
    const html5QRCodeScanner = new Html5QrcodeScanner(
      qrCodeRegionId,
      config,
      verbose,
    )
    html5QRCodeScanner.render(
      props.qrCodeSuccessCallback,
      props.qrCodeErrorCallback,
    )

    return () => {
      html5QRCodeScanner.clear().catch(e => {
        console.error('Failed to clear html5QRCodeScanner. ', e)
      })
    }
  }, [])

  return (
    <div id={qrCodeRegionId} />
  )
}
