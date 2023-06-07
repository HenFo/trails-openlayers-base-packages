// SPDX-FileCopyrightText: con terra GmbH and contributors
// SPDX-License-Identifier: Apache-2.0
import { defineBuildConfig } from "@open-pioneer/build-support";

export default defineBuildConfig({
    entryPoints: "index",
    styles: `./styles.css`,
    services: {
        OlMapRegistry: {
            provides: ["ol-map.MapRegistry"],
            references: {
                providers: {
                    name: "ol-map.MapConfigProvider",
                    all: true
                }
            }
        }
    },
    ui: {
        references: ["ol-map.MapRegistry"]
    },
    publishConfig: {
        strict: true
    }
});
