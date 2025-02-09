#!/bin/bash

# Vérifier si un argument est fourni.
if [ -z "$1" ]; then
    echo "Error: Network must be specified as an argument."
    echo "Usage: $0 <network>"
    exit 1
fi

# Déployer sur le réseau spécifié.
npx hardhat ignition deploy ignition/modules/EventManager.ts --network $1