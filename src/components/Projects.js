// import "react-multi-carousel/lib/styles.css";
import GameImg from "../assets/img/graphics.png";
import CompilerImg from "../assets/img/mini-compiler.jpg";
import githubIcon from "../assets/img/github-icon.png";

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="project-bx wow zoomIn">
              <h2>Projects</h2>
              <p>
                Here, you'll find a showcase of my technical and creative
                endeavors that highlight my passion for solving problems,
                building scalable solutions, and continuous learning
              </p>
              <h3>Digital Dominion</h3>
              <div class="project-box">
                <div class="project-title">
                  <div class="flexbox-container2">
                    <div class="flexbox-container">
                      <div class="img">
                        <img
                          src={GameImg}
                          className="dominion"
                          alt="Dominion"
                        ></img>
                      </div>
                    </div>
                    <div class="flexbox-container">
                      <div class="text">
                        <p class="dominion">
                          Digital Dominion is a strategic video game where two
                          players, taking on the roles of computer hackers, aim
                          to achieve one of two goals: either download four data
                          or force their opponent to download four viruses. The
                          game unfolds on an 8x8 board, with each player
                          controlling eight pieces known as links, comprising of
                          either viruses or data.
                        </p>
                        <p></p>
                        <p class="dominion">
                          The game is primarily developed in C++, leveraging its
                          object-oriented capabilities for structured and
                          efficient game design. For the graphical interface,
                          X11 is used, providing a robust platform for rendering
                          the game elements and managing user interactions.
                        </p>
                        <p></p>
                        <div class="flexbox-container2">
                          <img src={githubIcon} alt="" class="dominion" />
                          <a
                            href="https://github.com/abord77/DigitalDominion"
                            class="dominion"
                          >
                            Take a look at the source code for more details!
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3>Mini Compiler</h3>
              <div class="project-box">
                <div class="project-title">
                  <div class="flexbox-container">
                    <div class="flexbox-container2">
                      <div class="img">
                        <img
                          src={CompilerImg}
                          className="compiler"
                          alt="Compiler source code"
                        ></img>
                      </div>
                    </div>
                    <div class="flexbox-container2">
                      <div class="text">
                        <p class="compiler">
                          WLP4 (pronounced "Wool P Four") is a subset of C++
                          which stands for “Waterloo, Language, Plus, Pointers,
                          Plus, Procedures”. This compiler targets a simplified
                          language, commonly known as WLP4, which restricts
                          constructs to essential features such as function
                          definitions, controlled variable declarations, basic
                          arithmetic expressions, and limited control
                          structures. The compiler initiates processing through
                          lexical analysis using a maximal munch algorithm to
                          tokenize the input. These tokens are then fed into a
                          bottom-up parser, typically implemented as an SLR(1)
                          shift-reduce parser, which constructs the parse tree
                          from the leaves upward. In WLP4, every function
                          returns an integer and the main function, named wain,
                          uniquely accepts two parameters where the first is an
                          int or pointer to int and the second is an int.
                        </p>
                        <p></p>
                        <p class="compiler">
                          Local variables must be declared prior to any
                          executable statements, and control constructs like
                          if-else and while loops require well-defined block
                          delimiters. By deferring decision making until enough
                          context is available, the bottom-up approach minimizes
                          grammar ambiguities and simplifies error recovery.
                          Subsequent semantic analysis and code generation
                          phases convert the parse tree into optimized MIPS
                          assembly language, ensuring that the generated code
                          accurately reflects the high-level logic of the
                          original program. This design demonstrates
                          reliability.
                        </p>
                        <p></p>
                        <div class="flexbox-container2">
                          <img
                            src={githubIcon}
                            alt=""
                            class="compiler github"
                          />
                          <a
                            href="https://github.com/abord77/Mini-Compiler"
                            class="compiler"
                          >
                            Take a look at the source code for more details!
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <h3>Linear Algebra Calculator</h3>
              <div class="project-box">
                <div class="project-title">
                  <div class="flexbox-container2"></div>
                </div>
              </div> */}
              <h3>AI/ML/Prompt Engineering Project</h3>
              <div class="project-box">
                WIP, leveraging python library called langchain
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
