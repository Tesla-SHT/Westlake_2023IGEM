       // 封装的展示PDF的函数
       function displayPDF(pdfUrl, containerId) {
        // 获取容器元素
        const pdfContainer = document.getElementById(containerId);

        // 异步加载PDF文件
        const loadingTask = pdfjsLib.getDocument(pdfUrl);

        loadingTask.promise.then(function(pdfDocument) {
            // 循环加载和显示每一页
            for (let pageNumber = 1; pageNumber <= pdfDocument.numPages; pageNumber++) {
                pdfDocument.getPage(pageNumber).then(function(page) {
                    // 设置缩放比例
                    const scale = 1.5;

                    // 获取页面的视口
                    const viewport = page.getViewport({ scale });

                    // 创建一个Canvas元素来显示页面
                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');

                    // 设置Canvas的大小
                    canvas.width = viewport.width;
                    canvas.height = viewport.height;

                    // 将Canvas添加到容器中
                    pdfContainer.appendChild(canvas);

                    // 渲染页面到Canvas
                    const renderContext = {
                        canvasContext: context,
                        viewport: viewport,
                    };
                    page.render(renderContext);
                });
            }
        });
    }
displayPDF('https://static.igem.wiki/teams/4702/wiki/result-for-notebook/result-for-notebook/0917-dls-bio.pdf','pdf-container-1');
displayPDF('https://static.igem.wiki/teams/4702/wiki/result-for-notebook/result-for-notebook/0917-dls-chem.pdf','pdf-container-2');
// 调用展示PDF的函数并传入PDF文件的URL
displayPDF('https://static.igem.wiki/teams/4702/wiki/result-for-notebook/result-for-notebook/bio-zeta-potential-0917.pdf','pdf-container-3');
// 在另一个地方展示另一个PDF
displayPDF('https://static.igem.wiki/teams/4702/wiki/result-for-notebook/result-for-notebook/chem-zeta-potential-0917.pdf','pdf-container-4');
// 可以在需要的地方继续调用displayPDF函数来展示其他PDF文件

displayPDF('https://static.igem.wiki/teams/4702/wiki/results/tem-characterization-of-biologically-synthesized-nanoparticles/nanoparticle-size-distribution-supplementary-information-compressed.pdf','pdf-container-5');

displayPDF('https://static.igem.wiki/teams/4702/wiki/results/dls-zeta-potential/bio-sup-5mm-fe2-so4-3.pdf','pdf-container-6');

displayPDF('https://static.igem.wiki/teams/4702/wiki/results/dls-zeta-potential/chem-dls-0921.pdf','pdf-container-7');
displayPDF('https://static.igem.wiki/teams/4702/wiki/results/dls-zeta-potential/chem-zeta-0921.pdf','pdf-container-8');
displayPDF('https://static.igem.wiki/teams/4702/wiki/results/protein-purification-supplementary-information-copy-1.pdf','pdf-container-9');
displayPDF('https://static.igem.wiki/teams/4702/wiki/results/dls-zeta-potential/0-mm-fecl3-induced-resuspended-cell-pellet.pdf','pdf-container-10');
displayPDF('https://static.igem.wiki/teams/4702/wiki/results/results/2-5-mm-fecl3-induced-resuspended-cell-pellet.pdf','pdf-container-11');
displayPDF('https://static.igem.wiki/teams/4702/wiki/results/dls-zeta-potential/5-mm-fecl3-induced-resuspended-cell-pellet.pdf','pdf-container-12');
displayPDF('https://static.igem.wiki/teams/4702/wiki/results/dls-zeta-potential/7-5-mm-fecl3-induced-resuspended-cell-pellet.pdf','pdf-container-13');
displayPDF('https://static.igem.wiki/teams/4702/wiki/results/results/zeta-potential-0-mm-fecl3-induced-resuspended-cell-pellet.pdf','pdf-container-14');
displayPDF('https://static.igem.wiki/teams/4702/wiki/results/results/zeta-potential-2-5-mm-fecl3-induced-resuspended-cell-pellet.pdf','pdf-container-15');
displayPDF('https://static.igem.wiki/teams/4702/wiki/results/dls-zeta-potential/zeta-potential-5-mm-fecl3-induced-resuspended-cell-pellet.pdf','pdf-container-16');
displayPDF('https://static.igem.wiki/teams/4702/wiki/results/dls-zeta-potential/zeta-potential-7-5-mm-fecl3-induced-resuspended-cell-pellet.pdf','pdf-container-17');

displayPDF('https://static.igem.wiki/teams/4702/wiki/results/dls-zeta-potential/chem-zeta-sup.pdf','pdf-container-18');
displayPDF('https://static.igem.wiki/teams/4702/wiki/results/results/bio-5mm-fecl3-culture-sup-36h.pdf','pdf-container-19');
displayPDF('https://static.igem.wiki/teams/4702/wiki/results/results/bio-5mm-fecl3-culture-sup-48h.pdf','pdf-container-20');
displayPDF('https://static.igem.wiki/teams/4702/wiki/results/results/bio-5mm-fecl3-cell-lysate-sup-24h.pdf','pdf-container-21');
displayPDF('https://static.igem.wiki/teams/4702/wiki/results/results/bio-5mm-fecl3-cell-lysate-sup-36h.pdf','pdf-container-22');
displayPDF('https://static.igem.wiki/teams/4702/wiki/results/results/bio-5mm-fecl3-cell-lysate-sup-48h.pdf','pdf-container-23');
displayPDF('https://static.igem.wiki/teams/4702/wiki/result-for-notebook/result/bio-5mm-fecl3-culture-sup-24h.pdf','pdf-container-24');
displayPDF('https://static.igem.wiki/teams/4702/wiki/results/dls-zeta-potential/zeta-bio.pdf','pdf-container-25');
