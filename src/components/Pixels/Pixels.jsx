import "./Pixels.css";
import CONFIG from "../../config";
import RARITY from "../../rarity.json";
import Header from "../Header/Header.jsx";
import { Tabs, Tab } from "react-bootstrap";
import { Carousel } from "3d-react-carousal";

const getTotal = (attribute) => {
  let total = 0;
  Object.keys(attribute).forEach((key) => {
    total += attribute[key].totalMints;
  });
  return total;
};

const getAttributes = () => {
  let attributes = [];
  let curr;
  Object.keys(RARITY).forEach((key) => {
    curr = {};
    curr.name = key;
    curr.variants = [];
    Object.keys(RARITY[key]).forEach((attribute) => {
      let variant = {};
      variant.name = attribute;
      variant.totalMints = RARITY[key][attribute].totalMints;
      variant.probability = (
        RARITY[key][attribute].totalMints / getTotal(RARITY[key])
      ).toFixed(3);
      curr.variants.push(variant);
    });

    curr.variants.sort((a, b) => b.totalMints - a.totalMints);
    attributes.push(curr);
  });

  return attributes;
};

const Pixels = (props) => {
  const attributes = getAttributes();

  const slides = [
    <div>
      <img className="slide" src="/gallery/grid-4.png" alt="1" />
      <div className="slide-label">Grid</div>
    </div>,
    <div>
      <img className="slide" src="/gallery/tunnel.png" alt="2" />
      <div className="slide-label">Tunnel</div>
    </div>,
    <div>
      <img className="slide" src="/gallery/spiral.png" alt="3" />
      <div className="slide-label">Spiral</div>
    </div>,
    <div>
      <img className="slide" src="/gallery/fractal-grid.png" alt="4" />
      <div className="slide-label">Fractal Grid</div>
    </div>,
    <div>
      <img className="slide" src="/gallery/fractal-tunnel-2.png" alt="5" />
      <div className="slide-label">Fractal Tunnel</div>
    </div>,
    <div>
      <img className="slide" src="/gallery/fractal-spiral-3.png" alt="6" />
      <div className="slide-label">Fractal Spiral</div>
    </div>,
    <div>
      <img className="slide" src="/gallery/turing-seirpinksi.png" alt="7" />
      <div className="slide-label">Sierpinski</div>
    </div>,
    <div>
      <img className="slide" src="/gallery/staircase.png" alt="8" />
      <div className="slide-label">Staircase</div>
    </div>,
    <div>
      <img className="slide" src="/gallery/mandelbrot.png" alt="9" />
      <div className="slide-label">Mandelbrot</div>
    </div>,
    <div>
      <img className="slide" src="/gallery/fib.png" alt="10" />
      <div className="slide-label">Fibonacci</div>
    </div>,
  ];

  return (
    <div className="pixels-page">
      <Header dark={true} />

      <div className="section section-1">
        <div className="section-container section-row">
          <div className="section-left">
            <img src="gallery/fractal-tunnel.png" />
          </div>
          <div className="section-right section-splash">
            <div className="section-title">Pixels</div>
            <div className="section-subtitle">
              <p>
                An experiment in generate art and recursion, and a homage to
                several great minds in mathematics and computer science.
              </p>
              <br />
              <p>2^12 minted. Built by nerds using NodeJS.</p>
              <br />
              <p>
                <a
                  href="https://t.co/ogU4mZXRq9?amp=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-marketplaces"
                  >
                    Marketplaces
                  </button>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section section-2">
        <div className="section-container">
          <p className="section-title"> Patterns </p>
          <div>
            <Carousel slides={slides} />
            {/*
            <div className="section-gallery">
              <div className="gallery-item">
                <div className="gallery-title">Fractal Grid</div>
                <img src="/gallery/fractal-grid.png" />
              </div>
              <div className="gallery-item">
                <div className="gallery-title">Fractal Tunnel</div>
                <img src="/gallery/fractal-tunnel-2.png" />
              </div>
              <div className="gallery-item">
                <div className="gallery-title">Fractal Spiral</div>
                <img src="/gallery/fractal-spiral-3.png" />
              </div>
              <div className="gallery-item">
                <div className="gallery-title">Seirpinksi Carpet</div>
                <img src="/gallery/turing-seirpinksi.png" />
              </div>
              <div className="gallery-item">
                <div className="gallery-title">Penrose Staircase</div>
                <img src="/gallery/staircase.png" />
              </div>
              <div className="gallery-item">
                <div className="gallery-title">Mandelbrot</div>
                <img src="/gallery/mandelbrot.png" />
              </div>
              <div className="gallery-item">
                <div className="gallery-title">Fibonacci</div>
                <img src="/gallery/fib.png" />
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="section section-persons section-3">
        <div className="section-container section-col">
          <p className="section-title"> Color Palettes</p>
          <br />
          <br />

          <div className="persons">
            <div className="person">
              <p className="person-title">Pythagoras</p>
              <img src="people/pythagoras.png" />
              <div className="person-colors">
                {CONFIG.colorPalettes.pythagoras.map((color) => (
                  <span
                    className="person-color-10"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div className="person">
              <p className="person-title">Euclid</p>
              <img src="people/euclid.png" />

              <div className="person-colors">
                {CONFIG.colorPalettes.euclid.map((color) => (
                  <span
                    className="person-color-5"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div className="person">
              <p className="person-title">Lovelace</p>
              <img src="people/lovelace.png" />

              <div className="person-colors">
                {CONFIG.colorPalettes.lovelace.map((color) => (
                  <span
                    className="person-color"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <p></p>
            </div>

            <div className="person">
              <p className="person-title">Fibonacci</p>
              <img src="people/fibonacci.png" />

              <div className="person-colors">
                {CONFIG.colorPalettes.fibonacci.map((color) => (
                  <span
                    className="person-color-5"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
          <br />

          <div className="persons">
            <div className="person">
              <p className="person-title">Mandelbrot</p>
              <img src="people/mandelbrot.png" />

              <div className="person-colors">
                {CONFIG.colorPalettes.mandelbrot.map((color) => (
                  <span
                    className="person-color-6"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div className="person">
              <p className="person-title">Escher</p>
              <img src="people/escher.png" />

              <div className="person-colors">
                {CONFIG.colorPalettes.escher.map((color) => (
                  <span
                    className="person-color-10"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div className="person">
              <p className="person-title">Turing</p>
              <img src="people/turing.png" />

              <div className="person-colors">
                {CONFIG.colorPalettes.turing.map((color) => (
                  <span
                    className="person-color-5"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div className="person">
              <p className="person-title">Nakamoto</p>
              <img src="people/nakamoto.png" />

              <div className="person-colors">
                {CONFIG.colorPalettes.nakamoto.map((color) => (
                  <span
                    className="person-color-5"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section-4">
        <div className="section-container section-col">
          <p className="section-title"> Rarity</p>
          <div className="section-description">
            <p>There are two types of rarity in Pixels</p>
            <br />
            <p>
              1) The primary attribute, which is "pattern", has a fixed rarity.
              What this means is that we hard-coded the number of mints for each
              pattern type. Thus, the number of mints matches the rarity chart
              perfectly.
              <br />
              <br />
              2) All other attributes are probability based, so the actual mint
              numbers will vary. For example, if you were to flip a coin 10
              times, even though each has a .5 probability, the results may
              differ slightly.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>

      <div className="section section-5">
        <div className="section-container section-col">
          <div className="section-center">
            <div className="section-title">Statistics</div>
            <Tabs
              defaultActiveKey="pattern"
              transition={true}
              variant="pills"
              id="noanim-tab-example"
              className="mb-3"
            >
              <Tab eventKey="palette" title="Patterns">
                <br />
                <table className="attribute-table">
                  <tr>
                    <th>Pattern</th>
                    <th>Mints</th>
                    <th>Probability</th>
                  </tr>
                  <tr>
                    <td className="common">Grid</td>
                    <td className="common">696</td>
                    <td className="common">.159</td>
                  </tr>
                  <tr>
                    <td className="common">Tunnel</td>
                    <td className="common">696</td>
                    <td className="common">.159</td>
                  </tr>
                  <tr>
                    <td className="common">Spiral</td>
                    <td className="common">696</td>
                    <td className="common">.159</td>
                  </tr>
                  <tr>
                    <td className="uncommon">Fractal Grid</td>
                    <td className="common">522</td>
                    <td className="common">.12</td>
                  </tr>
                  <tr>
                    <td className="uncommon">Fractal Tunnel</td>
                    <td className="common">522</td>
                    <td className="common">.12</td>
                  </tr>
                  <tr>
                    <td className="uncommon">Fractal Spiral</td>
                    <td className="common">522</td>
                    <td className="common">.12</td>
                  </tr>
                  <tr>
                    <td className="rare">Sierpinski</td>
                    <td className="common">433</td>
                    <td className="common">.1</td>
                  </tr>
                  <tr>
                    <td className="epic">Staircase</td>
                    <td className="common">218</td>
                    <td className="common">.05</td>
                  </tr>
                  <tr>
                    <td className="legendary">Mandelbrot</td>
                    <td className="common">38</td>
                    <td className="common">.008</td>
                  </tr>
                  <tr>
                    <td className="artifact">Fibonacci</td>
                    <td className="common">9</td>
                    <td className="common">.002</td>
                  </tr>
                </table>
              </Tab>
              <Tab eventKey="pattern" title="Palettes">
                <br />
                <table className="attribute-table">
                  <tr>
                    <th>Palette</th>
                    <th>Mints</th>
                    <th>Probability</th>
                  </tr>
                  <tr>
                    <td className="common">Pythagoras</td>
                    <td className="common">1692</td>
                    <td className="common">.388</td>
                  </tr>
                  <tr>
                    <td className="uncommon">Mandelbrot</td>
                    <td className="common">455</td>
                    <td className="common">.104</td>
                  </tr>
                  <tr>
                    <td className="rare">Escher</td>
                    <td className="common">424</td>
                    <td className="common">.097</td>
                  </tr>
                  <tr>
                    <td className="rare">Euclid</td>
                    <td className="common">420</td>
                    <td className="common">.096</td>
                  </tr>
                  <tr>
                    <td className="rare">Lovelace</td>
                    <td className="common">409</td>
                    <td className="common">.093</td>
                  </tr>
                  <tr>
                    <td className="epic">Fibonacci</td>
                    <td className="common">391</td>
                    <td className="common">.089</td>
                  </tr>
                  <tr>
                    <td className="epic">Turing</td>
                    <td className="common">387</td>
                    <td className="common">.088</td>
                  </tr>
                  <tr>
                    <td className="legendary">Solana</td>
                    <td className="common">128</td>
                    <td className="common">.029</td>
                  </tr>
                  <tr>
                    <td className="artifact">Nakamoto</td>
                    <td className="common">46</td>
                    <td className="common">.01</td>
                  </tr>
                </table>
              </Tab>
              <Tab eventKey="attributes" title="Attributes">
                <br />
                <table className="attribute-table">
                  <tr>
                    <th>Attribute</th>
                    <th>Rarity</th>
                  </tr>
                  {attributes.map((attribute) => (
                    <tr>
                      <td>{attribute.name}</td>

                      <td className="common">
                        <table>
                          <tr>
                            <th>Variant</th>
                            <th>Mints</th>
                            <th>Probability</th>
                          </tr>
                          {attribute.variants.map((variant) => (
                            <tr>
                              <td>{variant.name}</td>
                              <td>{variant.totalMints}</td>
                              <td>{variant.probability}</td>
                            </tr>
                          ))}
                        </table>
                      </td>
                    </tr>
                  ))}
                </table>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
      <Header dark={true} />
    </div>
  );
};

export default Pixels;
