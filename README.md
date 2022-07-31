# All the Sutra

An app for yoga sutra study.

## Development Environment

This app is built using firebase + reactjs. For versions see the dockerfile.

```
docker build ./ --tag=all-the-sutra
docker run -dit --publish=80:80 --publish=3000:3000 --volume=`pwd`:/app --name=all-the-sutra all-the-sutra:latest
```
