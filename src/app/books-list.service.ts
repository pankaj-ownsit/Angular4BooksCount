import { Injectable } from '@angular/core';

@Injectable()
export class BooksListService {
  booksList: Array<any>;
  constructor() {
    this.booksList = [
            {
                title: 'The Innovator’s Dilemma',
                description: 'It took a Harvard Business School professor to see why new technologies can cause great companies to fail. After studying industries from steel to hard drives, Christenson discovered that listening to customers can cause a great executive to misread the market. Typically, customers ask for new features, and the most enthusiastic customers ask for lots of new features. The managers who accommodate requests and put them into the next version of the product run the risk of failing because they make their products too complicated. They don’t notice that for ordinary customers, the technology is good enough. When a technology becomes good enough, the market leader may fail to notice, only to be disrupted by a competitor who comes into the market and offers a good enough product. Too many companies are afraid to disrupt their own products, and so they are disrupted instead. At the same time, businesses that routinely improve their products often miss the boat when a new technology comes along and becomes a huge wave. While the book focuses on business strategy, it offers a lot of insights and it had a huge impact on the tech industry. And Christensen’s “Innovator’s” series of books became a cottage industry. For innovators of any stripe, the whole series is worth reading.',
                author: 'Clayton Christensen ',
                published: '1997',
                selected: false
            },
            {
                title: 'The Soul of a New Machine',
                description: 'This is the classic tech product creation story. Kidder writes the book so that you feel like you are a fly on the wall in the meetings at Data General, a minicomputer vendor in the 1970s. The author chronicles the turf war that takes place between two internal design groups within the company that are trying to create the great next-generation machine. The two teams are pitted against each other and they test whether a “quick and dirty” computer made by recent college graduates will make a better product or one that is painstakingly designed by an elite group. The book won a Pulitzer Prize in another era, but what hasn’t changed is difficulty of dealing with egos in team dynamics or the frenetic pace of product innovation. The book has inspired countless other business tales, including my own books on the history of Microsoft’s Xbox video game business.',
                author: 'Tracy Kidder',
                published: '1981',
                selected: false
            },
            {
                title: 'The Life and Times of an American',
                description: 'Before we move on to making a god out of Mark Zuckerberg, it’s good to remember who came before him. No one had a more remarkable rags to riches story than Andy Grove, the former chief executive of Intel. He was born a Hungarian Jew in 1936 and he survived the Holocaust while his father did not. During the bloody Hungarian revolution of 1956, he fled the country, crawling across the Austrian border in the mud. He arrived in America penniless, found help and managed to work his way through college. He graduated in time to catch the wave of change sweeping through the new Silicon Valley with the creation of seminal chip companies such as Fairchild. He was the third employee at Intel and became its CEO, taking no prisoners along the way. Grove became a statesman of the valley and a feared boss for those who didn’t have their act together. Among his decisions: engaging in a strategic retreat, where he and Gordon Moore decided to exit the memory chip market to focus on microprocessors. Then came IBM, looking for a microprocessor to put in its first personal computer. After that, Intel was golden and Grove was a key reason that Intel became the world’s biggest chip maker.',
                author: 'Richard S. Tedlow',
                published: '2006',
                selected: false
            },
            {
                title: 'The New New Thing',
                description: 'This tale showed how all roads led to Jim Clark, the founder of Silicon Graphics, Netscape and Healtheon. Lewis, the author of Liar’s Poker, swept into Silicon Valley and cozied up to Clark, the brilliant graphics expert who became the most important technology entrepreneur of the 1990s. The tale shows how the boom surrounding the internet turned the geeky Clark into one of the valley’s first billionaires. Clark rewrote the rules of Silicon Valley and capitalism itself. Lewis also chronicled Clark’s creation of Hyperion, a high-tech yacht that was more complex than a 747. Like Kidder, Lewis is a great storyteller who captured the poignant moments of Clark’s life. Clark didn’t set the world on fire with Healtheon, but his protegé, Marc Andreessen, has inherited the mantle of the uber-entrepreneur and investor of Silicon Valley.',
                author: 'Michael Lewis',
                published: '2001',
                selected: false
            },
            {
                title: 'The World is Flat',
                description: 'The globe-trotting Friedman has the best travel budget in the world and he makes good use of it here to deliver anecdotes that show the effects of globalization across the planet. He argues that technology and economic growth have leveled the playing field so that anyone can seize an advantage in commerce. In the global market, old historical and geographical boundaries are irrelevant. The stories about individuals — from the makers of video games in India to the call center operators in China — show how emerging economies have become key parts of the global supply chain. Friedman credits the spread of the web, the collapse of the Berlin Wall, workflow software, outsourcing, offshoring, and the spread of gadgets for producing a change that all Americans will have to adapt to. The key to survival will be making the work force more educated and adaptable.',
                author: 'Thomas Friedman',
                published: '2005',
                selected: false
            },
            {
                title: 'The Chip',
                description: 'This story chronicles how the electronics revolution began. The story shows the race to create the first integrated circuit, commonly known as a chip, that became the brains of everything electronic. Robert Noyce of Fairchild Semiconductor (and later Intel) and Jack Kilby of Texas Instruments created their own versions of the chip independently. Then the legal wrangling that ensued muddied the waters about who came up with the invention first. I recall reading this book and interviewing the taciturn and humble Kilby about his accomplishments back in Dallas more than two decades ago. He was a gentle giant, while Noyce became the industry’s statesman. In 2000, Kilby received a Nobel Prize for physics.',
                author: 'T.R. Reid',
                published: '1985',
                selected: false
            },
            {
                title: 'Hackers:',
                description: 'Levy’s first book coined the term “hacker” and it defined the ethos of the hacker movement as it arose from the counterculture of the 1960s and 1970s. He profiled everyone from Steve Wozniak to Richard Stallman, creator of the free software movement that culminated with Linux. Whether they’ve read the book or not, hackers still hold to the same set of ethics that Levy chronicled decades ago. Even Mark Zuckerberg, who wrote a letter dubbed “The Hacker Way” in Facebook’s initial public offering papers, professes to follow the same set of rules, starting with an open approach to technology. Levy published a 25th anniversary edition of the book and recently talked about it at the Defcon conference in 2011.',
                author: 'Steven Levy',
                published: '1984',
                selected: false
            },
        ];
    }
      getBooksList() {
        return this.booksList;
      }
  }

