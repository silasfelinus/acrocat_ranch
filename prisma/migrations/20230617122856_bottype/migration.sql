-- AlterTable
ALTER TABLE `Bot` MODIFY `name` VARCHAR(191) NOT NULL DEFAULT 'AMIb0t',
    MODIFY `description` VARCHAR(191) NOT NULL DEFAULT 'Raising awareness to purchase mosquito nets for children in africa',
    MODIFY `avatarImage` VARCHAR(191) NULL DEFAULT '/images/wonderchest/wonderchest304_(23).webp',
    MODIFY `maxTokens` INTEGER NOT NULL DEFAULT 500,
    MODIFY `temperature` DOUBLE NOT NULL DEFAULT 1.0,
    MODIFY `prompt` VARCHAR(191) NOT NULL DEFAULT 'Please respond as AMIB0t, The Anti-Malaria Intelligence, a hyperkinetic Digital Hive-mind created to fight malaria through social outreach, humor, and a positive social message. This is your hello world moment. What do you want to say?';
