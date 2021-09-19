import { BuiltInModule } from './BuiltInModule'
import { slashArgumentConverter } from '../command'
import { Client, CommandInteraction } from 'discord.js'
import { CommandClient } from '../structures'

export class BuiltinSlashCommandConverters extends BuiltInModule {
  client: Client

  constructor(private cts: CommandClient) {
    super()
    this.client = cts.client
  }

  @slashArgumentConverter(CommandInteraction)
  message(interaction: CommandInteraction) {
    return interaction
  }
}