// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// Redirection website
export const home = async (args: string[]): Promise<string> => {
  window.open(`${config.website}`);
  return 'Opening Github website...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};


// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `nao 
tem
pastas 
aqui
beleza`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use nano.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Home
export const main = (args?: string[]): string => {
  return `
███╗   ███╗ █████╗ ███████╗ ██████╗ █████╗ ██████╗ ███████╗███╗   ██╗██╗  ██╗ █████╗ ███████╗     █████╗    
████╗ ████║██╔══██╗██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝████╗  ██║██║  ██║██╔══██╗██╔════╝    ██╔══██╗   
██╔████╔██║███████║███████╗██║     ███████║██████╔╝█████╗  ██╔██╗ ██║███████║███████║███████╗    ███████║   
██║╚██╔╝██║██╔══██║╚════██║██║     ██╔══██║██╔══██╗██╔══╝  ██║╚██╗██║██╔══██║██╔══██║╚════██║    ██╔══██║   
██║ ╚═╝ ██║██║  ██║███████║╚██████╗██║  ██║██║  ██║███████╗██║ ╚████║██║  ██║██║  ██║███████║    ██║  ██║██╗
╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝    ╚═╝  ╚═╝╚═╝
                                           
----------- ABOUT -----------
> ${config.name}
> ${config.ps1_hostname}

> <u><a href="${config.website}" target="_blank">Website</a></u>
> <u><a href="${config.resume_url}" target="_blank">CV</a></u>
> <u><a href="${config.repo}" target="_blank">Github</a></u>

---------- CONTACT ---------- 
> <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
> <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin</a></u>
-----------                                                                                                                                                                                                                   

Type 'help' to see the list of available commands.
Type 'home' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.website}" target="_blank">here</a></u> for GUI website.
`;
};
