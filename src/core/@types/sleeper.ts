export enum Position {
  qb = "QB",
  rb = "RB",
  wr = "WR",
  te = "TE",
  flex = "FLEX",
  sflx = "SUPER_FLEX",
  bench = "BN",
}

export interface Scoring {
  st_ff: 0;
  pts_allow_7_13: 0;
  def_st_ff: 0;
  rec_yd: 0.1;
  fum_rec_td: 6;
  pts_allow_35p: 0;
  pts_allow_28_34: 0;
  fum: 0;
  pr_yd: 0.025;
  rush_yd: 0.1;
  pass_td: 4;
  blk_kick: 0;
  pass_yd: 0.04;
  safe: 0;
  def_td: 0;
  fgm_50p: 0;
  def_st_td: 0;
  fum_rec: 0;
  rush_2pt: 2;
  xpm: 0;
  pts_allow_21_27: 0;
  fgm_20_29: 0;
  kr_yd: 0.025;
  pts_allow_1_6: 0;
  fum_lost: -2;
  def_st_fum_rec: 0;
  int: 0;
  fgm_0_19: 0;
  pts_allow_14_20: 0;
  rec: 1;
  ff: 0;
  fgmiss: 0;
  st_fum_rec: 0;
  pass_int_td: -1;
  rec_2pt: 2;
  rush_td: 6;
  xpmiss: 0;
  fgm_30_39: 0;
  rec_td: 6;
  st_td: 6;
  pass_2pt: 2;
  pts_allow_0: 0;
  pass_int: -1;
  bonus_rec_te: 0.75;
  fgm_40_49: 0;
  sack: 0;
}

export interface LeagueSettings {
  reserve_allow_cov: 0;
  reserve_slots: 2;
  daily_waivers_base: 4;
  leg: 1;
  offseason_adds: 0;
  bench_lock: 0;
  trade_review_days: 2;
  league_average_match: 0;
  waiver_type: 2;
  max_keepers: 1;
  type: 2;
  pick_trading: 1;
  disable_trades: 0;
  daily_waivers: 1;
  taxi_years: 1;
  trade_deadline: 14;
  veto_show_votes: 0;
  reserve_allow_sus: 0;
  reserve_allow_out: 1;
  playoff_round_type: 0;
  waiver_day_of_week: 1;
  taxi_allow_vets: 1;
  reserve_allow_dnr: 0;
  veto_auto_poll: 0;
  commissioner_direct_invite: 1;
  reserve_allow_doubtful: 1;
  waiver_clear_days: 0;
  playoff_week_start: 15;
  daily_waivers_days: 2396;
  taxi_slots: 2;
  playoff_type: 1;
  daily_waivers_hour: 16;
  num_teams: 10;
  veto_votes_needed: 6;
  playoff_teams: 5;
  playoff_seed_type: 0;
  reserve_allow_na: 0;
  draft_rounds: 4;
  taxi_deadline: 4;
  waiver_bid_min: 0;
  capacity_override: 0;
  disable_adds: 1;
  waiver_budget: 100;
  best_ball: 0;
}

export interface LeagueMetadata {
  keeper_deadline: "0";
  copy_from_league_id: "1048395520739348480";
  auto_continue: "on";
}

export interface League {
  last_transaction_id: string | null;
  total_rosters: number;
  roster_positions: Array<Position>;
  loser_bracket_id: string | null;
  group_id: string | null;
  bracket_id: string | null;
  previous_league_id: string | null;
  league_id: string;
  last_read_id: string | null;
  draft_id: string | null;
  last_pinned_message_id: string | null;
  last_message_time: number | null;
  last_message_text_map: null;
  last_message_attachment: null;
  last_author_is_bot: boolean;
  last_author_id: string | null;
  last_author_display_name: string | null;
  last_author_avatar: string | null;
  last_message_id: string | null;
  display_order: number;
  scoring_settings: Scoring;
  sport: "nfl";
  season_type: "regular" | "playoff";
  season: string;
  shard: number;
  company_id: string | null;
  avatar: string | null;
  settings: LeagueSettings;
  metadata: LeagueMetadata;
  status: "pre_draft" | "drafting" | "in-season";
  name: string;
}

export interface RosterSettings {
  wins: 0;
  waiver_position: 7;
  waiver_budget_used: 0;
  total_moves: 0;
  ties: 0;
  losses: 0;
  locked: 0;
  fpts: 0;
}

export interface Roster {
  taxi: Array<string> | null;
  starters: Array<string>;
  settings: RosterSettings;
  roster_id: number;
  reserve: Array<string> | null;
  players: Array<string>;
  player_map: null;
  owner_id: string;
  metadata: null;
  league_id: string;
  keepers: Array<string> | null;
  co_owners: Array<string> | null;
}

export interface FullPlayer {
  injury_body_part: null;
  full_name: string;
  player_id: string;
  sportradar_id: string;
  years_exp: number;
  pandascore_id: null;
  position: Position | null;
  injury_status: string | null;
  last_name: string;
  fantasy_positions: Array<Position> | null;
  swish_id: null;
  rotoworld_id: number;
  sport: string;
  gsis_id: null;
  hashtag: string;
  news_updated: null;
  practice_participation: null;
  metadata: null;
  birth_state: null;
  birth_date: null;
  stats_id: null;
  search_rank: number;
  injury_notes: null;
  high_school: null;
  oddsjam_id: null;
  first_name: string;
  fantasy_data_id: number;
  college: string | null;
  yahoo_id: null;
  status: string;
  espn_id: null;
  team: string | null;
  rotowire_id: null;
  number: number;
  search_last_name: string;
  depth_chart_order: null;
  age: null;
  active: false;
  birth_city: null;
  dl_trading_id: null;
  height: string;
  injury_start_date: null;
  birth_country: null;
  practice_description: null;
  search_first_name: string;
  search_full_name: string;
  depth_chart_position: null;
  weight: string;
}

export interface Player {
  full_name: string;
  player_id: string;
  years_exp: number;
  position: Position | null;
  injury_status: string | null;
  fantasy_positions: Array<Position> | null;
  birth_date: string | null;
  college: string | null;
  status: string | null;
  team: string | null;
  number: number;
  age: number | null;
  active: boolean;
  height: string;
  weight: string;
}
