// Data structure containing the FAQ organized by category
        const faqData = [
            {
                category: "General Questions",
                questions: [
                    {
                        q: "What is this repository for?",
                        a: "This repository provides comprehensive installation guides and practice questions for multiple programming languages. It's designed to help beginners set up their development environment and start coding with hands-on exercises."
                    },
                    {
                        q: "Is this repository suitable for beginners?",
                        a: "Absolutely! We provide step-by-step installation guides and practice questions ranging from beginner to advanced levels. Start with the basics and progress at your own pace."
                    },
                    {
                        q: "Which operating systems are supported?",
                        a: "All guides include instructions for:<ul><li>Windows (10/11)</li><li>macOS (Intel and Apple Silicon)</li><li>Linux (Ubuntu, Debian, Fedora, and other major distributions)</li></ul>"
                    },
                    {
                        q: "Is this free to use?",
                        a: "Yes! This repository is open-source and licensed under the MIT License. You can use, modify, and share it freely."
                    }
                ]
            },
            {
                category: "Installation Questions",
                questions: [
                    {
                        q: "Do I need prior programming experience?",
                        a: "No prior experience is required for beginner-level content. However, some intermediate and advanced questions assume basic programming knowledge."
                    },
                    {
                        q: "What if I encounter installation errors?",
                        a: "<ol class='list-decimal ml-5 space-y-1'><li>Check the Troubleshooting section in the installation guide</li><li>Search existing GitHub issues</li><li>Create a new issue with details about your error</li><li>Consult the language-specific documentation</li></ol>"
                    },
                    {
                        q: "Can I use online IDEs instead of installing locally?",
                        a: "Yes! You can use online IDEs like:<ul><li><strong>Python</strong>: Google Colab, Repl.it</li><li><strong>Java</strong>: JDoodle, OnlineGDB</li><li><strong>JavaScript</strong>: CodePen, JSFiddle, CodeSandbox, StackBlitz</li><li><strong>PHP</strong>: PHPFiddle, 3v4l.org</li><li><strong>C/C++</strong>: OnlineGDB, Compiler Explorer</li><li><strong>R</strong>: RStudio Cloud</li><li><strong>Rust</strong>: Rust Playground</li></ul>"
                    },
                    {
                        q: "Which IDE should I use?",
                        a: "Popular choices include:<ul><li><strong>Python</strong>: VS Code, PyCharm, Jupyter Notebook</li><li><strong>Java</strong>: IntelliJ IDEA, Eclipse, VS Code</li><li><strong>JavaScript</strong>: VS Code, WebStorm, Sublime Text</li><li><strong>C/C++</strong>: VS Code, CLion, Code::Blocks</li><li><strong>PHP</strong>: VS Code, PhpStorm</li><li><strong>R</strong>: RStudio</li><li><strong>Rust</strong>: VS Code with rust-analyzer, IntelliJ IDEA with Rust plugin</li><li><strong>Docker</strong>: Docker Desktop, VS Code with Docker extension, Portainer</li></ul>"
                    }
                ]
            },
            {
                category: "Practice Questions",
                questions: [
                    {
                        q: "How are questions organized?",
                        a: "Questions are categorized by difficulty:<ul><li><strong>Beginner</strong>: Basic syntax, variables, loops, functions</li><li><strong>Intermediate</strong>: Data structures, file I/O, OOP concepts</li><li><strong>Advanced</strong>: Algorithms, multithreading, design patterns</li></ul>"
                    },
                    {
                        q: "Are solutions provided?",
                        a: "Currently, most folders contain working code examples. We're working on adding detailed solution explanations and alternative approaches."
                    },
                    {
                        q: "Can I submit my own solutions?",
                        a: "Yes! We encourage you to:<ol class='list-decimal ml-5 space-y-1'><li>Fork the repository</li><li>Add your solutions</li><li>Submit a pull request</li><li>Follow our [contribution guidelines](CONTRIBUTING.md)</li></ol>"
                    },
                    {
                        q: "How do I test my code?",
                        a: "Each language folder includes instructions for running code. Generally:<ul><li>Save your code in a file with the appropriate extension</li><li>Use the command line or IDE to run it</li><li>Compare output with expected results</li></ul>"
                    }
                ]
            },
            {
                category: "Contributing Questions",
                questions: [
                    {
                        q: "How can I contribute?",
                        a: "You can contribute by:<ul><li>Adding new programming languages</li><li>Creating more practice questions</li><li>Improving documentation</li><li>Fixing bugs or typos</li><li>Suggesting enhancements</li></ul>See our [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines."
                    },
                    {
                        q: "What if I'm not good at programming yet?",
                        a: "You can still contribute by:<ul><li>Reporting typos or errors</li><li>Suggesting improvements to documentation</li><li>Sharing your learning experience</li><li>Helping other beginners in discussions</li></ul>"
                    },
                    {
                        q: "How long does it take for PRs to be reviewed?",
                        a: "We aim to review pull requests within 3-7 days. Complex changes may take longer."
                    },
                    {
                        q: "Can I add questions in languages not yet in the repository?",
                        a: "Absolutely! We welcome new languages. Please include:<ul><li>Installation guide for all major platforms</li><li>At least 10 practice questions (beginner to advanced)</li><li>Basic usage examples</li></ul>"
                    }
                ]
            },
            {
                category: "Technical Questions",
                questions: [
                    {
                        q: "Why isn't my code running?",
                        a: "Common issues:<ul><li><strong>Syntax errors</strong>: Check for typos, missing brackets, or incorrect indentation</li><li><strong>Wrong version</strong>: Ensure you're using a compatible language version</li><li><strong>Missing dependencies</strong>: Install required packages or libraries</li><li><strong>Path issues</strong>: Verify file paths and working directory</li></ul>"
                    },
                    {
                        q: "How do I update my language installation?",
                        a: "Refer to the installation guide for your specific language. Most languages have update commands:<ul><li><strong>Python</strong>: <code>pip install --upgrade python</code></li><li><strong>Java</strong>: Download latest JDK from Oracle</li><li><strong>Rust</strong>: <code>rustup update</code></li><li><strong>R</strong>: Update through RStudio or download new version</li></ul>"
                    },
                    {
                        q: "Can I use different versions than recommended?",
                        a: "Yes, but be aware that:<ul><li>Syntax may differ between versions</li><li>Some features might not be available in older versions</li><li>Examples are tested with recommended versions</li></ul>"
                    }
                ]
            },
            {
                category: "Repository Structure",
                questions: [
                    {
                        q: "Why are folders named differently?",
                        a: "Some folders follow different conventions due to historical reasons or language-specific standards. We're working on standardizing the structure."
                    },
                    {
                        q: "Where should I place my contributions?",
                        a: "<ul><li><strong>New questions</strong>: In the appropriate <code>Questions/</code> or <code>questions/</code> folder</li><li><strong>Documentation</strong>: In the language's root folder</li><li><strong>General improvements</strong>: Update existing files</li></ul>"
                    },
                    {
                        q: "Can I reorganize the structure?",
                        a: "Major structural changes should be discussed in an issue first to ensure they align with project goals."
                    }
                ]
            },
            {
                category: "Learning Resources",
                questions: [
                    {
                        q: "Where can I learn more?",
                        a: "Check out our [Resources.md](Resources.md) for:<ul><li>Official documentation</li><li>Recommended books</li><li>Online courses</li><li>YouTube channels</li><li>Practice platforms</li></ul>"
                    },
                    {
                        q: "What order should I learn languages?",
                        a: "Recommended learning path for beginners: <ol class='list-decimal ml-5 space-y-1'><li><strong>Python</strong> - Easy syntax, great for beginners</li><li><strong>JavaScript</strong> - Essential for web development</li><li><strong>Java</strong> or <strong>C++</strong> - Learn OOP concepts</li><li><strong>Rust</strong> or <strong>Go</strong> - Modern systems programming</li><li><strong>Docker</strong> - Containerization and DevOps (complements any language)</li></ol>"
                    },
                    {
                        q: "How long does it take to learn a language?",
                        a: "<ul><li><strong>Basic proficiency</strong>: 2-3 months with regular practice</li><li><strong>Intermediate level</strong>: 6-12 months</li><li><strong>Advanced level</strong>: 1-2 years of continuous learning</li></ul>Remember: Consistency is more important than speed!"
                    }
                ]
            }
        ];

        function sanitizeFAQHtml(rawHtml) {
            const template = document.createElement('template');
            template.innerHTML = rawHtml;

            const allowedTags = new Set(['A', 'UL', 'OL', 'LI', 'STRONG', 'EM', 'CODE', 'P', 'BR']);
            const allowedAttrsByTag = {
                A: new Set(['href', 'target', 'rel']),
                UL: new Set(['class']),
                OL: new Set(['class']),
                LI: new Set(['class'])
            };

            const walk = (node) => {
                if (node.nodeType !== Node.ELEMENT_NODE) return;

                const tag = node.tagName;
                if (!allowedTags.has(tag)) {
                    const parent = node.parentNode;
                    while (node.firstChild) {
                        parent.insertBefore(node.firstChild, node);
                    }
                    parent.removeChild(node);
                    return;
                }

                const allowedAttrs = allowedAttrsByTag[tag] || new Set();
                Array.from(node.attributes).forEach((attr) => {
                    if (!allowedAttrs.has(attr.name)) {
                        node.removeAttribute(attr.name);
                    }
                });

                if (tag === 'A') {
                    const href = node.getAttribute('href') || '';
                    if (/^\s*javascript:/i.test(href)) {
                        node.removeAttribute('href');
                    }
                    if (node.getAttribute('target') === '_blank') {
                        node.setAttribute('rel', 'noopener noreferrer');
                    }
                }

                Array.from(node.children).forEach(walk);
            };

            Array.from(template.content.children).forEach(walk);
            return template.innerHTML;
        }

        // Function to render the FAQ sections and questions
        function renderFAQ() {
            const faqList = document.getElementById('faq-list');
            faqList.innerHTML = '';

            faqData.forEach((section, sectionIndex) => {
                // Create section element
                const sectionDiv = document.createElement('div');
                sectionDiv.className = 'faq-section';

                // Category Title
                const title = document.createElement('h2');
                title.textContent = section.category;
                sectionDiv.appendChild(title);

                // Questions Container
                const questionsContainer = document.createElement('div');
                questionsContainer.className = 'faq-questions';

                section.questions.forEach((item, itemIndex) => {
                    const id = `faq-${sectionIndex}-${itemIndex}`;

                    // Question Card
                    const questionCard = document.createElement('div');
                    questionCard.className = 'faq-item';

                    // Accordion Header (Question)
                    const headerButton = document.createElement('button');
                    headerButton.id = id + '-header';
                    headerButton.className = 'faq-header';
                    headerButton.setAttribute('aria-expanded', 'false');
                    headerButton.setAttribute('aria-controls', id + '-body');
                    headerButton.addEventListener('click', () => toggleAccordion(id));

                    const headerText = document.createElement('span');
                    headerText.textContent = item.q;

                    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    iconSvg.id = id + '-icon';
                    iconSvg.setAttribute('class', 'faq-icon');
                    iconSvg.setAttribute('viewBox', '0 0 24 24');
                    iconSvg.setAttribute('fill', 'none');
                    iconSvg.setAttribute('stroke', 'currentColor');
                    iconSvg.setAttribute('stroke-width', '2');
                    iconSvg.setAttribute('stroke-linecap', 'round');
                    iconSvg.setAttribute('stroke-linejoin', 'round');

                    const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    iconPath.setAttribute('d', 'M6 9l6 6 6-6');
                    iconSvg.appendChild(iconPath);

                    headerButton.appendChild(headerText);
                    headerButton.appendChild(iconSvg);
                    questionCard.appendChild(headerButton);

                    // Accordion Body (Answer)
                    const answerBody = document.createElement('div');
                    answerBody.id = id + '-body';
                    answerBody.className = 'faq-accordion-body';
                    answerBody.setAttribute('aria-labelledby', id + '-header');
                    
                    const answerContent = document.createElement('div');
                    answerContent.className = 'faq-answer';
                    answerContent.innerHTML = sanitizeFAQHtml(item.a);
                    
                    answerBody.appendChild(answerContent);
                    questionCard.appendChild(answerBody);

                    questionsContainer.appendChild(questionCard);
                });

                sectionDiv.appendChild(questionsContainer);
                faqList.appendChild(sectionDiv);
            });
        }

        // Accordion Toggle Logic
        function toggleAccordion(id) {
            const body = document.getElementById(id + '-body');
            const header = document.getElementById(id + '-header');
            const icon = document.getElementById(id + '-icon');
            
            const isExpanded = header.getAttribute('aria-expanded') === 'true';

            // Close all open accordions first (optional: but useful for FAQ pages)
            document.querySelectorAll('.faq-accordion-body.open').forEach(openBody => {
                if (openBody.id !== body.id) {
                    openBody.classList.remove('open');
                    openBody.previousElementSibling.setAttribute('aria-expanded', 'false');
                    openBody.previousElementSibling.querySelector('svg').classList.remove('rotated-icon');
                }
            });


            if (isExpanded) {
                // Close it
                body.classList.remove('open');
                header.setAttribute('aria-expanded', 'false');
                icon.classList.remove('rotated-icon');
            } else {
                // Open it
                body.classList.add('open');
                header.setAttribute('aria-expanded', 'true');
                icon.classList.add('rotated-icon');
            }
        }

        document.addEventListener('DOMContentLoaded', renderFAQ);

        // Theme Toggle (placeholder for future implementation)
        const btn = document.getElementById('btn-theme');
        if (btn) {
            btn.addEventListener('click', () => {
                // Theme toggle handled by shared component on pages where it is loaded.
            });
        }