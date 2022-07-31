# All the Sutra

An app for yoga sutra study.

## Terminology

A Sutra is a concise observation of a general truth in Sanskrit literature, grammar, philosophy or Hindu law.

Patanjali's Yoga Sutra is a collection of general truths of yoga philosophy arranged into chapters. There was a huge body of yogik culture when Patanjali was alive and this collection of sutra is a concise roadmap which distilled the spoken body of knowledge on the theory and practice of yoga. Patanjali was a rishi/sage in India in the early centuries CE.

Sanskrit is an ancient language of India with a robust, well-described structured grammar. It is the sacred language of Hinduism, the language of classical Hindu philosophy, and of historical texts of Buddhism and Jainism. Patanjali's Yoga Sutra's were originally written in Sanskrit and have been translated many times to English. Due to the concise nature of the sutra's, many translations expand the sutra's to make them more digestible. However, this expansion is dependant on the journey of the translator and thus many translations should be studied to get to the root of the teaching and find your own way.

## App Design

I want a place to study Patanjali's Yoga Sutra where multiple translations can be viewed together for a more complete view. There should obviously be good attribution as I am not a sutra scholar.

I picture a compact and detailed view for each sutra.

The compact view could be displayed in a ordered listing for easy browsing/reading. This will have the sutra number, sanskrit (both alphabets) and a core/trusted translation? Ideally the core/trusted translation would be configurable and consistent through all sutra.

The detailed view would include the same as the compact view + all the translations for that sutra in the app and a word break-down.

## Development Environment

This app is built using firebase + reactjs. For versions see the dockerfile.

```
docker build ./ --tag=all-the-sutra
```

```
docker run -dit --publish=80:80 --publish=3000:3000 --volume=`pwd`:/app --name=all-the-sutra all-the-sutra:latest
```
