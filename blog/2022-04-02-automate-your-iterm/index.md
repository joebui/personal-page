---
slug: automate-your-iterm
title: Automate your iTerm
tags: [iterm, automation, python, productivity]
---
import Gist from 'react-gist';

![header](https://miro.medium.com/max/1400/1*c8RwCLRsB7HNjfaP8CTWYQ.png)

If you use macOS and you are a software engineer, you may know about iTerm already. Well, I won’t mention about how to use iTerm and basic features 😁 . What I want to share is how to automate your iTerm using code.

Let’s imagine you’re developing microservices on your local machine and you want to open iTerm, run all the necessary commands to start services and tail logs. It would be fine for few services, but if you have like more than 5 and you manually click on many keys on keyboard to start them all, you will soon be tired and find it time-consuming.

___

Let’s dive into how to automate those steps or similar ones on iTerm step-by-step using Python!!!

## Install runtime

- On the top bar, click Scripts > Manage > New Python Script
- You will be prompted to install Python runtime environment and you should follow to install

## Create & run your first script

Once finished, try the 1st step above to create your first Python script

- iTerm will ask you types of script you want to create a template for you
- Open your script in any text editor
- For my example, I will show you how to create scripts that will create new tab and within that tab I split it into 4 panes and echo some texts

<Gist id="977e90f2475955923612f3f9c134bec0" />

- Once done, save it and head back to iTerm
- Click on Scripts and you’ll see your script, then click on it

![new script](https://miro.medium.com/max/440/1*K-0EqYrW0TXmyPw0HQvQtQ.png)

- You will notice something new on iTerm like the image below. Voila, now you finally have it, new tab with panes without so much effort in typing 😁

![final result](https://miro.medium.com/max/1400/1*sTrGtVeumgJAcDlZK8XmSw.png)

## Discover more

- For more available APIs and details, head to official documentation at <https://iterm2.com/python-api/>
- The location of scripts can be revealed by heading to Scripts > Manage > Reveal Scripts In Finder

___

I hope that this post can give you a glimpse of the potential of iTerm and how it can boost your daily work and productivity. Cheers and happy coding!!!

Note: there’s no copyright for any piece of code above and they’re totally open source. Please feel free to copy as your own and modify if needed.
