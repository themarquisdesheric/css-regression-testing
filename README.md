# CSS regression testing

We test our JS because we want to be sure it works, and to provide the best experience for our users and ourselves. Why don't we do the same with CSS?

## The Problem

You know how it goes. Your design was perfect, but upon closer inspection you notice that you lost some margin in your header. And come to think of it, wasn't the font size of the links a bit smaller than that? You check. It was. Someone (you) must have botched the CSS sometime in the past few weeks, and you didn't notice until now. You shudder to think of what else might be broken. 

CSS mistakes happen, and it's unfortunate that CSS has a bad rap because of it. 

As of now, there aren't that many options for ensuring your design doesn't break. You can do things to mitigate the problem, like using CSS-in-JS or your choice of scoped CSS, but you're still going to be subject to stylesheets outside of your control. Though the art of defensive CSS is a worthy one, there's got to be a better way.

Snapshot tests with utility classes work pretty well, but you still find yourself getting burned. 

## Similar Solutions

There are many options for visual regression testing frameworks that compare current and prior screenshots of your app, diff them, and report the differences. But those are cumbersome to use, and have many settings for how much breaking of your design you're willing to tolerate: there are settings for pixel shift, Gaussian blur, noise, even which axis you're willing to let your content shift on. They're not exact. 

## The Solution

If you created a snapshot of each node's CSS rather than a screenshot, you could easily diff it. Doing so by getting each node's computed properties would be ideal since you would be dealing with absolute values rather than allowing for any variation, and you could be sure that they are the final, resolved values after all stylesheets have been taken into account. 
