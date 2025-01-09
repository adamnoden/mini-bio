import profile from "../assets/profile.png";
import tate from "../assets/tate.png";
import paper from "../assets/paper.png";
import { QRCodeSVG } from "qrcode.react";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        background: "#222",
      }}
    >
      <div
        style={{
          // width: 648,
          // height: 248,
          background: "#080808",
          display: "flex",
        }}
      >
        <img
          src={profile}
          style={{
            height: 248,
            background: "red",
          }}
          alt="profile"
        />
        <div
          style={{
            background: "#faf9f0",
            // background: "red",
            backgroundImage: `url(${paper})`, // Path to your texture
            backgroundSize: "cover", // Ensures the texture covers the entire div
            backgroundRepeat: "no-repeat", // Prevents tiling
            backgroundPosition: "center", // Centers the texture
            display: "flex",
          }}
        >
          <div
            style={{
              width: 235,
              height: 208,
              borderRight: "1px dashed #ddd",
              padding: "20px",
              justifyContent: "space-between",
              fontFamily: "'Arial', sans-serif",
              color: "#313302",
              position: "relative",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: 24,
                marginBottom: 15,
              }}
              className="montserrat-extrabold"
            >
              ANALEOVY
            </div>
            <div
              style={{
                fontSize: 14,
                marginBottom: 15,
              }}
            >
              Adult Ticket
            </div>
            <div
              style={{
                fontSize: 14,
                marginBottom: 30,
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                }}
              >
                20.11.2020
              </div>
              <div>Saturday 11am - 6pm</div>
            </div>
            <div
              style={{
                fontSize: 11,
                lineHeight: "1.5",
              }}
            >
              Tate Britain
              <br />
              Milbank Str. 13B
              <br />
              London, UK
            </div>
            <img
              src={tate}
              style={{
                width: 55,
                position: "absolute",
                right: 24,
                bottom: 24,
              }}
              alt="tate"
            />
          </div>
          <div
            style={{
              width: 62,
              height: 208,
              color: "#313302",
              padding: 20,
            }}
          >
            <div
              style={{
                fontSize: 11,
                lineHeight: "1.5",
                marginBottom: 98,
              }}
            >
              1 day pass
              <br />
              20.11.2020
              <br />
              K3-8693-11
            </div>

            <QRCodeSVG
              fgColor="#525409"
              bgColor="#faf9f0"
              size={56}
              value="https://www.lockheedmartin.com/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
