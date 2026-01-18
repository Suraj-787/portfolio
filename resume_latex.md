%-------------------------
% Resume in Latex
% Author : Jake Gutierrez
% Based off of: https://github.com/sb2nov/resume
% License : MIT
%------------------------

\documentclass[letterpaper,11pt]{article}
\usepackage{paralist}

\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage{marvosym}
\usepackage[usenames,dvipsnames]{color}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\usepackage[english]{babel}
\usepackage{tabularx}
\usepackage{fontawesome5}
\usepackage{multicol}
\setlength{\multicolsep}{-3.0pt}
\setlength{\columnsep}{-1pt}
\input{glyphtounicode}


%----------FONT OPTIONS----------
% sans-serif
% \usepackage[sfdefault]{FiraSans}
% \usepackage[sfdefault]{roboto}
% \usepackage[sfdefault]{noto-sans}
% \usepackage[default]{sourcesanspro}

% serif
% \usepackage{CormorantGaramond}
% \usepackage{charter}


\pagestyle{fancy}
\fancyhf{} % clear all header and footer fields
\fancyfoot{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}

% Adjust margins
\addtolength{\oddsidemargin}{-0.6in}
\addtolength{\evensidemargin}{-0.5in}
\addtolength{\textwidth}{1.19in}
\addtolength{\topmargin}{-.7in}
\addtolength{\textheight}{1.4in}

\urlstyle{same}

\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Sections formatting
\titleformat{\section}{
  \vspace{-4pt}\scshape\raggedright\large\bfseries
}{}{0em}{}[\color{black}\titlerule \vspace{-5pt}]

% Ensure that generate pdf is machine readable/ATS parsable
\pdfgentounicode=1

%-------------------------
% Custom commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\classesList}[4]{
    \item\small{
        {#1 #2 #3 #4 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-2pt}\item
    \begin{tabular*}{1.0\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & \textbf{\small #2} \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeSubSubheading}[2]{
    \item
    \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
      \textit{\small#1} & \textit{\small #2} \\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeProjectHeading}[2]{
    \item
    \begin{tabular*}{1.001\textwidth}{l@{\extracolsep{\fill}}r}
      \small#1 & \textbf{\small #2}\\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeSubItem}[1]{\resumeItem{#1}\vspace{-4pt}}

\renewcommand\labelitemi{$\vcenter{\hbox{\tiny$\bullet$}}$}
\renewcommand\labelitemii{$\vcenter{\hbox{\tiny$\bullet$}}$}

\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0.0in, label={}]}
\newcommand{\resumeSubHeadingListEnd}{\end{itemize}}
\newcommand{\resumeItemListStart}{\begin{itemize}}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-5pt}}

%-------------------------------------------
%%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%

\usepackage{hyperref} % Load the hyperref package

% Optional: Customize link colors
\hypersetup{
    colorlinks=true, % Enable colored links
    linkcolor=blue,  % Color of internal links (sections, pages, etc.)
    urlcolor=blue    % Color of external links (URLs)
}

\begin{document}

%----------HEADING----------
% \begin{tabular*}{\textwidth}{l@{\extracolsep{\fill}}r}
%   \textbf{\href{http://sourabhbajaj.com/}{\Large Sourabh Bajaj}} & Email : \href{mailto:sourabh@sourabhbajaj.com}{sourabh@sourabhbajaj.com}\\
%   \href{http://sourabhbajaj.com/}{http://www.sourabhbajaj.com} & Mobile : +1-123-456-7890 \\
% \end{tabular*}

\begin{center}
    {\Huge \scshape Suraj Kumar} \\ \vspace{1pt}
   
    \small \raisebox{-0.1\height}\faPhone\ +91 6299421648 ~ 
    \href{mailto:1si23ad057@sit.ac.in}{\underline{1si23ad057@sit.ac.in}}
     ~ 
    \href{https://www.linkedin.com/in/suraj-kumar-99a085295/}{\raisebox{-0.2\height}\ \underline{https://www.linkedin.com/in/suraj-kumar-99a085295/}}  ~
    \href{https://leetcode.com/u/suraj787/}
    {\raisebox{-0.2\height}\ \underline{https://leetcode.com/u/suraj787/}}  ~
      \href{https://github.com/Suraj-787}
    {\raisebox{-0.2\height}\  \underline{https://github.com/Suraj-787}}  ~
 
    \vspace{-8pt}
\end{center}


%-----------EDUCATION-----------
\section{Education}
  \resumeSubHeadingListStart
    \resumeSubheading
      {Siddaganga Institute Of Technology}{August 2023 - present}
      {Bachelor of Engineering in Artificial Intelligence and Data Science(CGPA of 9.53) — 2023-27}{Tumkur,Karnataka}
      
      
     
  \resumeSubHeadingListEnd
  \vspace{-12pt}


\section{Relevant Coursework}
\begin{itemize}[leftmargin=0.15in, label={}]
  \small{
    \item{
      \textbf{Core Courses:} \\
      \vspace{2pt}
      $\bullet$ Data Structures and Algorithms \hspace{16pt}
      $\bullet$ Object-Oriented Programming \hspace{30pt}
      $\bullet$ Operating Systems \\
      $\bullet$ Database Management Systems \hspace{19pt}
      $\bullet$ Design and Analysis of Algorithms \hspace{12pt}
      $\bullet$ Machine Learning
    }
  }
\end{itemize}
\vspace{-15pt}




%-----------PROGRAMMING SKILLS-----------



\section{Skills}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{Languages:} C++, C, Python, Java, JavaScript, TypeScript \\
     \textbf{Frameworks \& Libraries:} React, Next.js, Node.js, Express, Bun, Tailwind CSS, shadcn/ui \\
     \textbf{Databases \& Backend:} PostgreSQL, MongoDB, SQL, Prisma, REST APIs, JWT \\
     \textbf{AI \& Systems:} LLM Integration (Gemini, OpenAI), NLP, Multi-Agent Systems, Redis, LiveKit \\
     \textbf{Tools:} Git, GitHub, CI/CD, Docker (basic)
    }}
 \end{itemize}
 \vspace{-15pt}





%-----------EXPERIENCE-----------
%-----------PROJECTS-----------
\section{Projects}
\vspace{-5pt}
\resumeSubHeadingListStart

\resumeProjectHeading
{\textbf{Kuma AI — Intelligent Personal Assistant with Multi-Agent System}}{\href{https://github.com/Suraj-787/kuma}{\raisebox{-0.2\height}\faGithub\ \underline{Link}}}
\resumeItemListStart
  \resumeItem{Built a full-stack AI assistant with multi-agent architecture, long-term memory, and vision capabilities.}
  \resumeItem{Integrated Google Workspace apps (Gmail, Calendar, Drive, Docs, Sheets) and GitHub for seamless productivity.}
  \resumeItem{Implemented real-time voice chat with LiveKit, Redis queue processing, and JWT authentication.}
  \resumeItem{Tech stack: React, TypeScript, Bun, Express, PostgreSQL, Prisma, Redis, and AI SDK with Google Gemini/OpenAI.}
\resumeItemListEnd \vspace{-18pt}

\resumeProjectHeading
{\textbf{FinTalk — Multilingual Conversational Loan App}}{\href{https://github.com/Suraj-787/fintalk}{\raisebox{-0.2\height}\faGithub\ \underline{Link}}}
\resumeItemListStart
  \resumeItem{Built an AI chatbot to assist users with loan eligibility, guidance, and recommendations.}
  \resumeItem{Integrated multilingual NLP support using Sarvam AI for accessibility across regions.}
  \resumeItem{Developed with Python, Streamlit, Hugging Face Transformers, and secure authentication.}
\resumeItemListEnd \vspace{-18pt}

\resumeProjectHeading
{\textbf{Sayan — Government Schemes App}}{\href{https://github.com/Suraj-787/sayan}{\raisebox{-0.2\height}\faGithub\ \underline{Link}}}
\resumeItemListStart
  \resumeItem{Created a Next.js platform for browsing and interacting with Indian government schemes.}
  \resumeItem{Built an AI-powered multilingual chatbot with integrated voice assistant features.}
  \resumeItem{Used Tailwind CSS, shadcn/ui, MongoDB, and TypeScript for responsive UI and backend.}
\resumeItemListEnd \vspace{-18pt}

\resumeProjectHeading
{\textbf{AutoToon — AI Comic Generator}}{\href{https://github.com/Suraj-787/autotoon_full}{\raisebox{-0.2\height}\faGithub\ \underline{Link}}}
\resumeItemListStart
  \resumeItem{Developed a full-stack AI app that converts text prompts into comic panels and stories.}
  \resumeItem{Added story creation, style selection, and real-time comic generation tracking.}  
  \resumeItem{Tech stack: Next.js, Bun, Express (TS), Sharp, PDF-lib, and Tailwind CSS.}
\resumeItemListEnd \vspace{-18pt}

\vspace{8pt}

    
%
%-----------Achievements-----------

\section{Achievements}
  \resumeItemListStart
    \resumeItem{Participated in \textbf{JP Morgan Code for Good 2025}, building dashboards for NGO \textit{PANS} to empower rural women through transparency, quality checks, and efficient order management.}
    \resumeItem{Ranked \textbf{304th} out of 6000+ teams in the \textbf{Amazon ML Challenge 2025}.}
    \resumeItem{\textbf{1st Runner-Up} at "Research Gate" Hackathon for \textit{Sayan} (Govt. scheme app); \textbf{2nd Runner-Up} in \textbf{UI/UX Design} at \textit{Browse}.}
    \resumeItem{Solved \textbf{260+ LeetCode problems} with a contest rating of \textbf{1508}.}
    \resumeItem{Organized a \textbf{hackathon} for AI Brewery; conducted a \textbf{Generative AI workshop} (40+ participants) and a multi-day \textbf{Web Development workshop} for juniors.}
    \resumeItem{Ranked in the \textbf{Top 10\%} among 1200+ teams at \textit{The Great Bengaluru Hackathon} with \textit{FinTalk}, an AI-powered finance assistant.}
  \resumeItemListEnd





 

 %



%
%-----------Profile Links-----------
%-----------INVOLVEMENT---------------

 \vspace{-10pt}
\section{Position Of Responsibility}
     \resumeSubHeadingListStart
      \resumeSubheading
 {Decoders-The Official Programming Club of S.I.T.}{May 2024 -- Present}

          {Tumkur,Karnataka}{Member}

          \resumeItemListStart
\resumeItem{ Collaborated with the team to organize various \textbf{coding} challenges and events while promoting a strong \textbf{coding culture} across the campus. }
        \resumeItemListEnd
  \resumeSubHeadingListEnd
\vspace{-10pt}

\resumeSubHeadingListStart
      \resumeSubheading
 {AI Brewery}{June 2025 -- Present}

          {Tumkur,Karnataka}{Member}

          \resumeItemListStart
\resumeItem{ Engaged in \textbf{AI-focused projects}, \textbf{web development}, and active participation in tech discussions. }
        \resumeItemListEnd
  \resumeSubHeadingListEnd
\vspace{-10pt}


\end{document}