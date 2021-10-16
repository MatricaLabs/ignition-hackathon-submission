import "./Roadmap.css";
import "react-color-palette/lib/css/styles.css";
import { useEffect, useState } from "react";
import Header from "../Header/Header.jsx";
import avgHex from "../../lib/hex";

const Art = (props) => {
  useEffect(() => {}, []);

  return (
    <div className="roadmap">
      <Header />
      <div className="section section-1">
        <div className="section-container section-col">
          <div className="section-title">Pixels</div>
          <div className="section-description">
            2<sup>12</sup> (4096) works of generated art, built for the Solana
            blockchain.
          </div>
          <div className="section-action">
            <a href="/pixels">
              <button className="btn btn-dark">Learn More</button>
            </a>
          </div>
          <div className="pixels">
            <div className="pixels-row">
              <div className="pixel pixel-1">
                <img src="preview/mandelbrot-2.png" />
              </div>
              <div className="pixel pixel-2 color-1 start-1"></div>
              <div className="pixel pixel-3">
                <img src="preview/mandelbrot-1.png" />
              </div>
            </div>
            <div className="pixels-row">
              <div className="pixel pixel-4 color-2 start-2"></div>
              <div className="pixel pixel-5 ">
                <img src="preview/mandelbrot-3.png" />
              </div>
              <div className="pixel pixel-6 color-3 start-5"></div>
            </div>
            <div className="pixels-row">
              <div className="pixel pixel-7 color-6 start-3"></div>
              <div className="pixel pixel-8 color-5 start-4"></div>
              <div className="pixel pixel-6 color-4 start-6"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section-2">
        <div className="section-container section-row">
          <div className="section-left">
            <div className="palette palette-1 ">
              <div className="target target-1 color-1" />
              <div className="name">#8A50FF</div>
            </div>

            <div className="palette palette-2 ">
              <div className="target target-2 color-2" />
              <div className="name">#2793FE</div>
            </div>

            <div className="palette palette-3 ">
              <div className="target target-3 color-3" />
              <div className="name">#11C987</div>
            </div>
          </div>

          <div className="section-center">
            <div className="section-subtitle">Introducing</div>
            <div className="section-title">Colors</div>
            <div className="section-description">
              <p>
                Colors are building blocks in the metaverse -- ones which
                empowers their holders with new possibilities for
                personalization and artistic expression.
              </p>
              <p>
                All Pixels holders can dissolve their Pixel into its component
                Colors.
              </p>
            </div>
            <div className="section-action">
              <a href="/litepaper.pdf" target="_blank">
                <button className="btn btn-dark">Read the Litepaper</button>
              </a>
            </div>
          </div>

          <div className="section-right">
            <div className="color palette palette-4">
              <div className="target target-5 color-5" />
              <div className="name">#FF9900</div>
            </div>

            <div className="color palette palette-5">
              <div className="target target-4 color-4" />
              <div className="name">#FFFF00</div>
            </div>

            <div className="color palette palette-6">
              <div className="target target-6 color-6" />
              <div className="name">#FF5253</div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section-col section-3">
        <div className="section-container section-col">
          <div className="section-title">Primary Color Mint</div>
          <div className="section-description">
            The only colors that will be available for puchase are the five
            basic RGB colors. A limited amount of each color will be made
            available. All other colors must be acquired by either combining
            colors or by dissolving (burning) a Pixel.
          </div>
          <img className="contact" src="/roadmap/mint-collection.png" />
        </div>
      </div>

      <div className="section section-4">
        <div className="section-container section-row">
          <div className="section-left">
            <img className="mixer" src="/roadmap/mixer.png" />
          </div>
          <div className="section-right">
            <div className="section-title">Produce New Colors</div>
            <div className="section-description">
              Combine any two Colors to produce a new Color. The Colors used
              will be burned and forever removed from the supply.
            </div>
            <div className="section-subtitle">Unique Color Count</div>
            <div className="section-count">16,777,216</div>
          </div>
        </div>
      </div>

      <div className="section section-5">
        <div className="section-container section-row">
          <div className="section-left">
            <div className="blah">
              <div className="section-title">Pixels²</div>
              <div className="section-description">
                <p>
                  Pixels² will be the next iteration of Pixels. This time,
                  however, minters can choose their own color scheme based on
                  the Colors in their wallet.
                </p>
                <br />
                <p>
                  Just like with Pixels, Pixels² NFTs can be burned to mint
                  their component colors.
                </p>
                <br />
                <p>
                  In addition to providing new designs and features, Pixels²
                  will serve as a template project for other projects to use. We
                  plan to open-source our smart contracts and Web3 tools.
                </p>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img className="pixel2" src="/roadmap/pixel2.png" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="section-container section-row">
          <a href="mailto:contact@matricalabs.io">
            <img className="contact" src="/roadmap/contact.png" />
          </a>
        </div>
      </div>

      {/* <div className="section section-6">
        <div className="section-container section-row">
          <img src="/roadmap/metaverse.png" />
        </div>
      </div> */}
      <Header />
    </div>
  );
};

export default Art;
