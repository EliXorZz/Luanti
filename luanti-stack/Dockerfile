FROM ghcr.io/luanti-org/luanti:5.15.0

USER root
RUN apk add --no-cache git

RUN mkdir -p /var/lib/minetest/.minetest/games && \
    git clone https://github.com/luanti-org/minetest_game.git /var/lib/minetest/.minetest/games/minetest_game

RUN chown -R minetest:minetest /var/lib/minetest/.minetest

USER minetest
CMD ["luantiserver", "--config", "/etc/minetest/minetest.conf", "--gameid", "minetest_game", "--worldname", "world"]