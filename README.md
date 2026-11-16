# Um convite para nós — Fase 6 (refinamento visual)

Um convite direto para um date artístico, feito com HTML, CSS, JavaScript e SVG locais. Sem instalação, fontes externas ou dependências.

## Abrir e avaliar

Abra `index.html` no navegador. Se preferir um servidor local, execute `python3 -m http.server 8000` nesta pasta e acesse `http://localhost:8000`.

- Observe o cartão creme, a legibilidade do bordô e o envelope fechado. Essa é uma direção inicial, ainda aberta a mudanças.
- Experimente larguras de 320, 375 e 390 pixels nas ferramentas de dispositivo do navegador e uma janela desktop. Em telas baixas, a página pode rolar verticalmente.
- O convite artístico aparece ao abrir a página, com “Sim ❤️” e “Não” disponíveis de imediato. Use Tab e Enter ou Espaço para escolher pelo teclado.
- Clique em “Sim ❤️”: surge a confirmação com uma transição suave. Abaixo da confirmação aparecem os cards de Pintura e Colagem. Toque em um deles: a borda, a indicação “Escolhida ✓” e a mensagem abaixo devem confirmar sua escolha. Toque no outro para mudar. Recarregue para recomeçar.
- Pelo teclado, confira que o foco passa para o título da confirmação após aceitar.
- Experimente cliques rápidos: a sequência não deve reiniciar nem avançar além da confirmação.
- Com redução de movimento ativada no sistema, não há animação de entrada, ou fade.

## Arquivos e ajustes

- `index.html`: estrutura e conteúdo inicial legível mesmo sem JavaScript.
- `style.css`: apresentação; a paleta fica nas variáveis no início do arquivo.
- `script.js`: conteúdo inicial em `revealContent`. Se alterar os textos iniciais, atualize também o HTML para mantê-los legíveis sem JavaScript.
- Os textos da revelação e da confirmação ficam em `revealContent` e `acceptedContent`, no `script.js`.
- `assets/envelope.svg`: envelope fechado da primeira tela, substituível no Inkscape.
- `assets/atelie.svg`: ilustração usada no card de Pintura e no pôster dessa atividade.
- `assets/paper.svg`: textura discreta do papel.

As Fases 1 a 5 foram implementadas, incluindo o pôster final com a atividade escolhida. A escolha existe apenas na página e é perdida ao recarregar. Os detalhes do encontro são os textos personalizados em `posterContent`.

## Sua primeira ilustração no Inkscape (opcional)

Não é necessário produzir nada para testar o site. O guia abaixo é para a ilustração de ateliê usada na opção Pintura; a primeira tela agora usa `assets/envelope.svg`. Quando quiser personalizar a ilustração de ateliê:

1. Abra `assets/atelie.svg` no Inkscape e salve uma cópia de trabalho. Em Propriedades do documento, mantenha a página em **240 × 160 px**, com fundo transparente e viewBox `0 0 240 160`.
2. No painel Camadas e objetos, crie as camadas **Papel**, **Pincel** e **Taça**, nessa ordem. Bloqueie as outras enquanto desenha em cada uma.
3. Em Papel, use Retângulos para uma folha de aproximadamente 100 × 95 px. Em Preenchimento e contorno, aplique preenchimento `#F6EEDF`, contorno `#C9B89C` de 1,2 px. Com Seleção, clique novamente para girar a folha um pouco.
4. Para tinta sobre a folha, use Bézier e desenhe três linhas levemente curvas. Sem preenchimento, contorno `#B9664D`, largura 12 px e extremidades arredondadas. Use Nós para ajustar as curvas.
5. Em Pincel, use Bézier para desenhar um cabo estreito e comprido, preenchido com `#777F67` e sem contorno. Acrescente um retângulo pequeno `#C3AA7E` para a peça metálica e uma ponta curva `#713C48`. Agrupe as peças e gire o conjunto com Seleção.
6. Em Taça, use Bézier para criar o bojo fechado; ajuste as curvas com Nós. Preenchimento `#FFFAF0`, contorno `#713C48` de 2 px. Desenhe uma forma interna `#A96770` para o vinho e duas linhas para haste e base, sem preenchimento e com o mesmo contorno.
7. Mantenha os desenhos dentro da página, deixando cerca de 15 px de margem. Use Arquivo → Salvar uma cópia e escolha **SVG simples**. Não é preciso exportar PNG.
8. Salve o resultado como `assets/atelie.svg` para atualizar o card e o pôster de Pintura. Esse arquivo não aparece na primeira tela. Guarde a cópia de trabalho separada caso queira preservar camadas e outros dados do Inkscape.

Mais tarde, paleta, tesoura e recortes podem virar SVGs separados para os cards de escolha; a moldura do pôster pode ser feita quando chegarmos ao convite final.


## Escolha da atividade — Fase 4

Os textos, caminhos das ilustrações e confirmações ficam em `activityContent`, no `script.js`. `selectedActivity` guarda o identificador escolhido enquanto a página está aberta.

- Antes de aceitar, nenhum card deve aparecer.
- Depois do “Sim”, use Tab para chegar às opções e as setas do teclado para alternar. Só uma opção pode ficar selecionada.
- Confira os cards empilhados no celular e lado a lado a partir de 600 px. A página pode rolar verticalmente.
- Com redução de movimento ativada, a seleção continua visível, sem transição de cor.
- Nenhuma escolha é enviada ou persistida. Depois de selecionar, use “Ver nosso convite” para abrir o pôster.

### Personalizar a colagem no Inkscape (opcional)

1. Abra `assets/colagem.svg` e salve uma cópia de trabalho. Mantenha a página transparente em 240 × 160 px, com viewBox `0 0 240 160`.
2. Crie camadas **Papéis**, **Recortes** e **Tesoura**, nessa ordem, no painel Camadas e objetos.
3. Em Papéis, use Retângulos para duas folhas de cerca de 100 × 95 px. Use preenchimentos `#DED0B8` e `#FFFAF0`; na folha clara, contorno `#C9B89C` de 1,5 px. Gire um pouco com Seleção.
4. Em Recortes, use Bézier para polígonos irregulares e Elipses para um círculo. Aplique `#B9664D`, `#858F78` e `#C99991`, sem contorno. Sobreponha as formas às folhas.
5. Em Tesoura, desenhe duas elipses sem preenchimento, com contorno `#713C48` de 3 px, para as alças. Use Bézier para duas lâminas estreitas, preenchimento `#E3D6C4` e o mesmo contorno. Ajuste com Nós e adicione um pequeno círculo `#B9664D` na articulação.
6. Mantenha tudo dentro da página com margem de 15 px. Salve uma cópia como **SVG simples** em `assets/colagem.svg`. Recarregue o site e avance até a escolha para conferir. Não é necessário exportar PNG.


## Convite final — Fase 5

Edite `posterContent`, no `script.js`, para ajustar título, descrição, detalhes, comidinhas, vinho, música e despedida. Data, horário e local já receberam seus textos personalizados; revise-os nesse objeto antes de compartilhar.

1. Avance até as atividades. “Ver nosso convite” deve ficar inativo até uma opção ser selecionada.
2. Selecione Pintura e abra o convite. Confira o nome e a ilustração da atividade, além dos textos de data, horário e local.
3. Use “Trocar atividade”, selecione Colagem e abra novamente. O pôster deve atualizar o nome e a ilustração sem duplicar os detalhes.
4. Teste por teclado: escolha com as setas, avance com Tab e Enter. Ao abrir o pôster, o foco vai para seu título; ao voltar, retorna à opção marcada.
5. Confira larguras de 320 e 390 px, rolando para ler todo o pôster. Com redução de movimento, ele aparece sem animação.
6. Recarregar reinicia a experiência: nada é enviado ou salvo.

A composição reaproveita os SVGs locais e a textura de papel. Nesta fase, a moldura é feita com bordas CSS para facilitar ajustes; podemos personalizar os elementos vetoriais na Fase 6.


## Recusar depois da revelação

Na revelação, “Não” é uma opção fixa junto de “Sim ❤️”. Ela encerra a experiência com os textos de `declinedContent` (atualmente apenas “SEM PRESSA” e “Tudo bem…”), sem avançar às atividades. Edite essa tela em `declinedContent` no `script.js`.

Para testar, abra a página e escolha “Não”: os botões devem desaparecer e o foco ir para o título. Recarregue e teste “Sim ❤️” para conferir o fluxo das atividades. Em telas estreitas, os botões podem ficar empilhados.


## Identidade visual — Fase 6

Mantivemos a direção aprovada: papel creme `#FFFAF0`, fundo quente `#EEE5D8`, bordô `#713C48` para títulos e botões, terracota `#B9664D` para detalhes e verde discreto nas ilustrações. A tipografia continua local: Georgia para o convite e fonte do sistema para os controles.

A pincelada `assets/pincelada.svg` aparece apenas sob o título do pôster, como decoração sem texto. O envelope continua como ilustração da abertura. Campos de rodapé vazios não desenham mais uma linha solta.

### Primeiro exercício: sua pincelada no Inkscape

1. Crie um documento. Em Propriedades do documento, defina a página em **320 × 40 px**, fundo transparente. O SVG final deve ter `viewBox="0 0 320 40"`.
2. Em Camadas e objetos, crie uma camada **Tinta**. Se abrir o SVG existente como referência, deixe-o em uma camada **Referência**, bloqueada, abaixo de Tinta.
3. Selecione **Bézier**. Clique para desenhar um polígono comprido e irregular entre x=10 e x=310, y=8 e y=30. Feche clicando no ponto inicial. Evite simetria perfeita.
4. Em **Preenchimento e contorno**, escolha preenchimento `#B9664D`, sem contorno, com opacidade de cerca de 65%.
5. Use **Nós** para ajustar alguns pontos. Faça ondulações pequenas; mantenha pelo menos 5 px de margem para não cortar a forma.
6. Ainda com Bézier, desenhe duas lascas finas sob a forma principal. Use a mesma cor, sem contorno, com opacidade de 30%. Isso sugere marcas de tinta sem precisar de filtros.
7. Oculte a camada Referência antes de salvar. Guarde uma cópia de trabalho com as camadas e use **Salvar uma cópia → SVG simples** para gerar `assets/pincelada.svg`. Não precisa exportar PNG nem instalar ferramentas adicionais.
8. Substitua o arquivo nessa pasta. Recarregue o site, aceite, escolha uma atividade e abra o convite. O novo desenho aparece automaticamente sob “Simbora!”.

### O que avaliar agora

- A pincelada deve parecer um detalhe, sem competir com o título ou a ilustração.
- Confira o pôster com Pintura e com Colagem em 320 px, 390 px e desktop.
- A abertura deve mostrar o convite artístico e os dois botões.
- Recuse na revelação: o rodapé vazio não deve deixar uma linha abaixo de “Tudo bem…”.

A personalização no Inkscape é opcional: o SVG inicial já funciona. A direção definitiva fica aberta à sua avaliação; animações e revisão geral seguem nas Fases 7 e 8.
