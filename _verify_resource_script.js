const resourceData = [
        {
          file: 'Agentic_AI_Architecture.pdf',
          tag: 'Agentic AI',
          title: 'Agentic AI Architecture',
          description: 'Architecture or blueprint guidance for designing practical AI and data systems.',
          type: 'pdf',
          size: '13.3 MB',
          search: 'agentic ai architecture agentic ai pdf',
        },
        {
          file: 'Agentic_AI_Playbook.pdf',
          tag: 'Agentic AI',
          title: 'Agentic AI Playbook',
          description: 'Focused learning resource for building AI capabilities and decision systems.',
          type: 'pdf',
          size: '12.1 MB',
          search: 'agentic ai playbook agentic ai pdf',
        },
        {
          file: 'Agentic_Architecture.pdf',
          tag: 'Agentic AI',
          title: 'Agentic Architecture',
          description: 'Architecture or blueprint guidance for designing practical AI and data systems.',
          type: 'pdf',
          size: '10.4 MB',
          search: 'agentic architecture agentic ai pdf',
        },
        {
          file: 'AI_Architecture_Blueprint.pdf',
          tag: 'Architecture',
          title: 'AI Architecture Blueprint',
          description: 'Architecture or blueprint guidance for designing practical AI and data systems.',
          type: 'pdf',
          size: '17.1 MB',
          search: 'ai architecture blueprint architecture pdf',
        },
        {
          file: 'AI_in_Business_Strategy.mp4',
          tag: 'Strategy',
          title: 'AI In Business Strategy',
          description: 'Video learning resource covering modern AI strategy, systems, and engineering concepts.',
          type: 'video',
          size: '18.2 MB',
          search: 'ai in business strategy strategy video',
        },
        {
          file: 'AI_Integration_Strategy_Blueprint.png',
          tag: 'Strategy',
          title: 'AI Integration Strategy Blueprint',
          description: 'Visual blueprint or strategic roadmap for AI learning and implementation.',
          type: 'image',
          size: '5.5 MB',
          search: 'ai integration strategy blueprint strategy image',
        },
        {
          file: 'Architecting_Autonomous_AI.pdf',
          tag: 'Learning',
          title: 'Architecting Autonomous AI',
          description: 'Focused learning resource for building AI capabilities and decision systems.',
          type: 'pdf',
          size: '13.5 MB',
          search: 'architecting autonomous ai learning pdf',
        },
        {
          file: 'Architecting_Data_Flow.pdf',
          tag: 'Data Engineering',
          title: 'Architecting Data Flow',
          description: 'Focused learning resource for building AI capabilities and decision systems.',
          type: 'pdf',
          size: '15.1 MB',
          search: 'architecting data flow data engineering pdf',
        },
        {
          file: 'Azure_ML_Blueprint.pdf',
          tag: 'Cloud AI',
          title: 'Azure ML Blueprint',
          description: 'Architecture or blueprint guidance for designing practical AI and data systems.',
          type: 'pdf',
          size: '16.0 MB',
          search: 'azure ml blueprint cloud ai pdf',
        },
        {
          file: 'Classification_Blueprint.pdf',
          tag: 'Classification',
          title: 'Classification Blueprint',
          description: 'Classification techniques, diagnostics, and evaluation practices for AI workflows.',
          type: 'pdf',
          size: '12.4 MB',
          search: 'classification blueprint classification pdf',
        },
        {
          file: 'Classification_Diagnostic_Playbook.pdf',
          tag: 'Classification',
          title: 'Classification Diagnostic Playbook',
          description: 'Classification techniques, diagnostics, and evaluation practices for AI workflows.',
          type: 'pdf',
          size: '13.0 MB',
          search: 'classification diagnostic playbook classification pdf',
        },
        {
          file: 'Deconstructing_the_Future__The_Logic_of_Time_Series.mp4',
          tag: 'Learning',
          title: 'Deconstructing the Future the Logic Of Time Series',
          description: 'Video learning resource covering modern AI strategy, systems, and engineering concepts.',
          type: 'video',
          size: '49.7 MB',
          search: 'deconstructing the future the logic of time series learning video',
        },
        {
          file: 'Deep_Learning_Blueprint.pdf',
          tag: 'Learning',
          title: 'Deep Learning Blueprint',
          description: 'Deep learning and neural architecture patterns for modern AI systems.',
          type: 'pdf',
          size: '15.9 MB',
          search: 'deep learning blueprint learning pdf',
        },
        {
          file: 'Engineering_the_ML-to-GenAI_Pipeline.mp4',
          tag: 'Generative AI',
          title: 'Engineering the ML To GenAI Pipeline',
          description: 'Video learning resource covering modern AI strategy, systems, and engineering concepts.',
          type: 'video',
          size: '82.1 MB',
          search: 'engineering the ml to genai pipeline generative ai video',
        },
        {
          file: 'Enterprise_AI_Blueprint.pdf',
          tag: 'Enterprise AI',
          title: 'Enterprise AI Blueprint',
          description: 'Architecture or blueprint guidance for designing practical AI and data systems.',
          type: 'pdf',
          size: '18.2 MB',
          search: 'enterprise ai blueprint enterprise ai pdf',
        },
        {
          file: 'GenAI_Innovation_Pod_Blueprint.pdf',
          tag: 'Generative AI',
          title: 'GenAI Innovation Pod Blueprint',
          description: 'Architecture or blueprint guidance for designing practical AI and data systems.',
          type: 'pdf',
          size: '16.4 MB',
          search: 'genai innovation pod blueprint generative ai pdf',
        },
        {
          file: 'Machine_Learning_Atlas.pdf',
          tag: 'Learning',
          title: 'Machine Learning Atlas',
          description: 'Machine learning foundations, algorithms, and modeling workflows.',
          type: 'pdf',
          size: '19.6 MB',
          search: 'machine learning atlas learning pdf',
        },
        {
          file: 'Machine_Learning_Blueprint.pdf',
          tag: 'Learning',
          title: 'Machine Learning Blueprint',
          description: 'Machine learning foundations, algorithms, and modeling workflows.',
          type: 'pdf',
          size: '16.2 MB',
          search: 'machine learning blueprint learning pdf',
        },
        {
          file: 'Mastering_the_GitHub_Workflow.pdf',
          tag: 'Engineering',
          title: 'Mastering the Github Workflow',
          description: 'Engineering workflow and source-control practices for AI delivery teams.',
          type: 'pdf',
          size: '12.0 MB',
          search: 'mastering the github workflow engineering pdf',
        },
        {
          file: 'Modern_AI_Engineering_Blueprint.pdf',
          tag: 'Learning',
          title: 'Modern AI Engineering Blueprint',
          description: 'Architecture or blueprint guidance for designing practical AI and data systems.',
          type: 'pdf',
          size: '12.4 MB',
          search: 'modern ai engineering blueprint learning pdf',
        },
        {
          file: 'Modern_AI_Systems_Architecture.pdf',
          tag: 'Architecture',
          title: 'Modern AI Systems Architecture',
          description: 'Architecture or blueprint guidance for designing practical AI and data systems.',
          type: 'pdf',
          size: '19.8 MB',
          search: 'modern ai systems architecture architecture pdf',
        },
        {
          file: 'Modern_Data_Engineering_Blueprint.pdf',
          tag: 'Data Engineering',
          title: 'Modern Data Engineering Blueprint',
          description: 'Architecture or blueprint guidance for designing practical AI and data systems.',
          type: 'pdf',
          size: '12.0 MB',
          search: 'modern data engineering blueprint data engineering pdf',
        },
        {
          file: 'Path_to_Autonomous_Agents.mp4',
          tag: 'Agentic AI',
          title: 'Path To Autonomous Agents',
          description: 'Video learning resource covering modern AI strategy, systems, and engineering concepts.',
          type: 'video',
          size: '49.5 MB',
          search: 'path to autonomous agents agentic ai video',
        },
        {
          file: 'Precision_Financial_Diagnostic_Architecture.pdf',
          tag: 'Diagnostics',
          title: 'Precision Financial Diagnostic Architecture',
          description: 'Architecture or blueprint guidance for designing practical AI and data systems.',
          type: 'pdf',
          size: '15.0 MB',
          search: 'precision financial diagnostic architecture diagnostics pdf',
        },
        {
          file: 'Prediction_to_Prescription_Roadmap.png',
          tag: 'Strategy',
          title: 'Prediction To Prescription Roadmap',
          description: 'Visual blueprint or strategic roadmap for AI learning and implementation.',
          type: 'image',
          size: '5.1 MB',
          search: 'prediction to prescription roadmap strategy image',
        },
        {
          file: 'Project-Vessel-2026_Mystery.mp4',
          tag: 'Learning',
          title: 'Project Vessel 2026 Mystery',
          description: 'Video learning resource covering modern AI strategy, systems, and engineering concepts.',
          type: 'video',
          size: '16.5 MB',
          search: 'project vessel 2026 mystery learning video',
        },
        {
          file: 'PyCaret_Machine_Learning_on_Autopilot.pdf',
          tag: 'Foundations',
          title: 'Pycaret Machine Learning On Autopilot',
          description: 'Machine learning foundations, algorithms, and modeling workflows.',
          type: 'pdf',
          size: '17.1 MB',
          search: 'pycaret machine learning on autopilot foundations pdf',
        },
        {
          file: 'Regression_Diagnostic_Toolkit.pdf',
          tag: 'Diagnostics',
          title: 'Regression Diagnostic Toolkit',
          description: 'Regression modeling patterns, diagnostics, and evaluation fundamentals.',
          type: 'pdf',
          size: '15.9 MB',
          search: 'regression diagnostic toolkit diagnostics pdf',
        },
        {
          file: 'Supervised_Learning_Fundamentals.pdf',
          tag: 'Foundations',
          title: 'Supervised Learning Fundamentals',
          description: 'Focused learning resource for building AI capabilities and decision systems.',
          type: 'pdf',
          size: '11.3 MB',
          search: 'supervised learning fundamentals foundations pdf',
        },
        {
          file: 'The_Agentic_AI_Blueprint.pdf',
          tag: 'Agentic AI',
          title: 'the Agentic AI Blueprint',
          description: 'Architecture or blueprint guidance for designing practical AI and data systems.',
          type: 'pdf',
          size: '17.2 MB',
          search: 'the agentic ai blueprint agentic ai pdf',
        },
        {
          file: 'The_AI_Production_Blueprint.pdf',
          tag: 'Production AI',
          title: 'the AI Production Blueprint',
          description: 'Architecture or blueprint guidance for designing practical AI and data systems.',
          type: 'pdf',
          size: '15.1 MB',
          search: 'the ai production blueprint production ai pdf',
        },
        {
          file: 'The_Data_Refinery_Blueprint.pdf',
          tag: 'Data Engineering',
          title: 'the Data Refinery Blueprint',
          description: 'Architecture or blueprint guidance for designing practical AI and data systems.',
          type: 'pdf',
          size: '20.8 MB',
          search: 'the data refinery blueprint data engineering pdf',
        },
        {
          file: 'The_MCP_Standard.pdf',
          tag: 'Standards',
          title: 'the MCP Standard',
          description: 'Protocol and interoperability patterns for connecting AI systems and tools.',
          type: 'pdf',
          size: '11.8 MB',
          search: 'the mcp standard standards pdf',
        },
        {
          file: 'The_PAD_GenAI_Blueprint.pdf',
          tag: 'Generative AI',
          title: 'the Pad GenAI Blueprint',
          description: 'Architecture or blueprint guidance for designing practical AI and data systems.',
          type: 'pdf',
          size: '12.0 MB',
          search: 'the pad genai blueprint generative ai pdf',
        },
        {
          file: 'The_POR_Scaling_Blueprint.pdf',
          tag: 'Learning',
          title: 'the Por Scaling Blueprint',
          description: 'Architecture or blueprint guidance for designing practical AI and data systems.',
          type: 'pdf',
          size: '15.0 MB',
          search: 'the por scaling blueprint learning pdf',
        },
        {
          file: 'The_RAG_Blueprint.pdf',
          tag: 'Generative AI',
          title: 'the RAG Blueprint',
          description: 'Architecture or blueprint guidance for designing practical AI and data systems.',
          type: 'pdf',
          size: '16.1 MB',
          search: 'the rag blueprint generative ai pdf',
        },
        {
          file: 'The_Regression_Blueprint.pdf',
          tag: 'Diagnostics',
          title: 'the Regression Blueprint',
          description: 'Regression modeling patterns, diagnostics, and evaluation fundamentals.',
          type: 'pdf',
          size: '12.3 MB',
          search: 'the regression blueprint diagnostics pdf',
        },
        {
          file: 'The_Transformer_Blueprint.pdf',
          tag: 'Deep Learning',
          title: 'the Transformer Blueprint',
          description: 'Deep learning and neural architecture patterns for modern AI systems.',
          type: 'pdf',
          size: '17.8 MB',
          search: 'the transformer blueprint deep learning pdf',
        },
        {
          file: 'The_Two_Brains_AI_Blueprint.pdf',
          tag: 'Learning',
          title: 'the Two Brains AI Blueprint',
          description: 'Architecture or blueprint guidance for designing practical AI and data systems.',
          type: 'pdf',
          size: '12.5 MB',
          search: 'the two brains ai blueprint learning pdf',
        },
        {
          file: 'Time_Series_Blueprint.pdf',
          tag: 'Learning',
          title: 'Time Series Blueprint',
          description: 'Temporal modeling, forecasting, and trend decomposition methods.',
          type: 'pdf',
          size: '14.1 MB',
          search: 'time series blueprint learning pdf',
        },
        {
          file: 'Unsupervised_Learning_Playbook.pdf',
          tag: 'Foundations',
          title: 'Unsupervised Learning Playbook',
          description: 'Focused learning resource for building AI capabilities and decision systems.',
          type: 'pdf',
          size: '13.1 MB',
          search: 'unsupervised learning playbook foundations pdf',
        },
        {
          file: 'Unsupervised_Learning_Strategy.pdf',
          tag: 'Strategy',
          title: 'Unsupervised Learning Strategy',
          description: 'Focused learning resource for building AI capabilities and decision systems.',
          type: 'pdf',
          size: '15.0 MB',
          search: 'unsupervised learning strategy strategy pdf',
        },
        {
          file: 'Unveiling_ML_Architecture.mp4',
          tag: 'Architecture',
          title: 'Unveiling ML Architecture',
          description: 'Video learning resource covering modern AI strategy, systems, and engineering concepts.',
          type: 'video',
          size: '28.6 MB',
          search: 'unveiling ml architecture architecture video',
        }
      ];

      const resourceGrid = document.getElementById('resourceGrid');
      const search = document.querySelector('.search');
      const emptyState = document.getElementById('emptyState');
      const visibleCountEl = document.getElementById('visibleCount');
      const filterBtns = document.querySelectorAll('.filter-btn');

      let activeFilter = 'all';
      let searchQuery = '';

      function renderResourceGrid() {
        resourceGrid.innerHTML = resourceData
          .map((resource, index) => {
            const isVideo = resource.type === 'video';
            const isImage = resource.type === 'image';
            const actionLabel = isImage ? 'View blueprint' : isVideo ? 'Watch video' : 'Read report';

            return `
              <article class="card" data-search="${resource.search}" data-type="${resource.type}">
                <div class="card-header">
                  <div class="number">${String(index + 1).padStart(2, '0')}</div>
                  <span class="format-badge ${resource.type}">${resource.type.toUpperCase()} · ${resource.size}</span>
                </div>
                <p class="tag">${resource.tag}</p>
                <h3>${resource.title}</h3>
                <p class="description">${resource.description}</p>
                <div class="actions">
                  <a class="button primary" href="${resource.file}" target="_blank">${actionLabel}</a>
                  <a class="button secondary" href="${resource.file}" download>Download</a>
                </div>
              </article>
            `;
          })
          .join('');
      }

      function updateGridVisibility() {
        const cards = resourceGrid.querySelectorAll('.card');
        let visibleCount = 0;

        cards.forEach((card) => {
          const matchesType = activeFilter === 'all' || card.dataset.type === activeFilter;
          const matchesSearch = !searchQuery || card.dataset.search.includes(searchQuery);

          if (matchesType && matchesSearch) {
            card.style.display = 'flex';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        if (visibleCountEl) {
          visibleCountEl.textContent = `Showing ${visibleCount} of ${resourceData.length} resources`;
        }
        emptyState.style.display = visibleCount ? 'none' : 'block';
      }

      // Filter button clicks
      filterBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          filterBtns.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          activeFilter = btn.dataset.filter;
          updateGridVisibility();
        });
      });

      // Search input handler
      search.addEventListener('input', () => {
        searchQuery = search.value.trim().toLowerCase();
        updateGridVisibility();
      });

      // Preview Dialog Logic
      const dialog = document.getElementById('previewDialog');
      const previewTitle = document.getElementById('previewTitle');
      const previewContent = document.getElementById('previewContent');
      const previewOpenLink = document.getElementById('previewOpenLink');
      const previewCloseBtn = document.getElementById('previewCloseBtn');

      function openPreview(url, type, title) {
        previewTitle.textContent = title;
        previewOpenLink.href = url;
        previewOpenLink.textContent =
          type === 'video' ? 'Open video in new tab' :
          type === 'image' ? 'Open image in new tab' :
          'Open full document';
        previewContent.innerHTML = '';

        if (type === 'pdf') {
          const iframe = document.createElement('iframe');
          iframe.src = url;
          previewContent.appendChild(iframe);
        } else if (type === 'video') {
          const video = document.createElement('video');
          video.src = url;
          video.controls = true;
          video.autoplay = true;
          previewContent.appendChild(video);
        } else if (type === 'image') {
          const img = document.createElement('img');
          img.src = url;
          img.alt = title;
          previewContent.appendChild(img);
        }

        dialog.showModal();
      }

      previewCloseBtn.addEventListener('click', () => dialog.close());

      dialog.addEventListener('close', () => {
        previewContent.innerHTML = '';
      });

      // Close modal when clicking on backdrop
      dialog.addEventListener('click', (event) => {
        if (event.target === dialog) {
          const rect = dialog.getBoundingClientRect();
          const isDialogContent =
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width;
          if (!isDialogContent) {
            dialog.close();
          }
        }
      });

      // Event delegation for primary action buttons on cards
      resourceGrid.addEventListener('click', (e) => {
        const btn = e.target.closest('.button.primary');
        if (!btn) return;

        const href = btn.getAttribute('href');
        if (!href) return;

        let type = '';
        const urlLower = href.toLowerCase();
        if (urlLower.endsWith('.pdf')) {
          type = 'pdf';
        } else if (urlLower.endsWith('.mp4')) {
          type = 'video';
        } else if (
          urlLower.endsWith('.png') ||
          urlLower.endsWith('.jpg') ||
          urlLower.endsWith('.jpeg')
        ) {
          type = 'image';
        }

        if (type) {
          e.preventDefault();
          const card = btn.closest('.card');
          const title = card ? card.querySelector('h3').textContent : 'Document Preview';
          openPreview(href, type, title);
        }
      });

      // Initial render
      renderResourceGrid();
      updateGridVisibility();