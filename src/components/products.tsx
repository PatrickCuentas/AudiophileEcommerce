import Button from './button'

export default function Products() {
  return (
    <div className="pb-[170px]">
      <div className="flex flex-col gap-[24px] text-center">
        {/* ZX9 SPEAKER */}
        <SpeakerZX9 />
        {/* ZX7 SPEAKER */}
        <SpeakerZX7 />
        {/* YX1 EARPHONES */}
        <EarphonesYX1 />
      </div>
    </div>
  )
}

function SpeakerZX9() {
  const backgroundImageDiv = {
    backgroundImage: `url("../../assets/home/mobile/image-speaker-zx9.png")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '170px',
    height: '200px',
  }

  return (
    <div className="bg-[#d87d4a] rounded-[8px] px-[24px] py-[55px]">
      <div className="flex flex-col items-center">
        <div style={backgroundImageDiv}></div>
        <h2 className="text-[36px] text-white max-w-[10ch] mt-[32px] leading-10">
          ZX9 SPEAKER
        </h2>
        <p className="text-[15px] text-white font-medium leading-[25px] my-[24px]">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button styles={{ backgroundColor: '#000' }}>
          <span className="text-white text-[13px] font-bold">SEE PRODUCT</span>
        </Button>
      </div>
    </div>
  )
}

function SpeakerZX7() {
  const backgroundImageDiv = {
    backgroundImage: `url("../../assets/home/mobile/image-speaker-zx7.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'end',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <div
      style={backgroundImageDiv}
      className="bg-[#dcdcdc] rounded-[8px] h-[320px] pl-4"
    >
      <div className="flex items-center h-full">
        <div className="text-start">
          <h2 className="text-[28px] text-black mb-[32px]">ZX7 SPEAKER</h2>
          <button className="w-[160px] h-[48px] bg-transparent border-black border-[1px]">
            <span className="text-[13px] font-bold">SEE PRODUCT</span>
          </button>
        </div>
      </div>
    </div>
  )
}

function EarphonesYX1() {
  const backgroundImageDiv = {
    backgroundImage: `url("../../assets/home/mobile/image-earphones-yx1.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minWidth: '100%',
    height: '200px',
    borderRadius: '8px',
  }

  return (
    <div>
      <div style={backgroundImageDiv}></div>
      <div className="bg-[#dcdcdc] rounded-[8px] h-[200px] pl-4 mt-[24px]">
        <div className="flex items-center h-full">
          <div className="text-start">
            <h2 className="text-[28px] text-black mb-[32px]">YX1 EARPHONES</h2>
            <button className="w-[160px] h-[48px] bg-transparent border-black border-[1px]">
              <span className="text-[13px] font-bold">SEE PRODUCT</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
