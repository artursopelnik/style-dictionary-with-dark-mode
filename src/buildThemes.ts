import StyleDictionary from 'style-dictionary'
import {
  logBrokenReferenceLevels,
  logVerbosityLevels,
  logWarningLevels,
} from 'style-dictionary/enums'
import { Config } from 'style-dictionary/types'

const themes = ['light', 'dark']

const CONFIG: Config = {
  log: {
    warnings: logWarningLevels.warn,
    verbosity: logVerbosityLevels.default,
    errors: {
      brokenReferences: logBrokenReferenceLevels.throw,
    },
  },
}

const buildThemes = (async () => {
  await Promise.all(
    themes.map((theme) => {
      const isLight = theme === 'light'

      // this is saying find any files in the tokens folder
      // that does not have dark or light
      const src = isLight ? `!(*.${themes.join(`|*.`)})` : `*.${theme}`

      const sd = new StyleDictionary({
        ...CONFIG,
        source: [`tokens/**/${src}.json`, `tokens/**/${src}.json5`],
        platforms: {
          css: {
            transformGroup: 'css',
            buildPath: 'build/css/',
            files: [
              {
                destination: `variables.${theme}.css`,
                format: `css/variables`,
                options: {
                  selector: `:root, :host, .theme-${theme}`,
                  outputReferences: true,
                },
              },
            ],
          },
        },
      })
      return sd.buildAllPlatforms()
    }),
  )
})()

export default buildThemes
