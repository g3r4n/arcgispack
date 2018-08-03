const esriConfig = window.esriBundle.esriConfig;
const Basemap = window.esriBundle.Basemap;
const Camera = window.esriBundle.Camera;
const Color = window.esriBundle.Color;
const config = window.esriBundle.config;
const geometry = window.esriBundle.geometry;
const Graphic = window.esriBundle.Graphic;
const Ground = window.esriBundle.Ground;
const kernel = window.esriBundle.kernel;
const Map = window.esriBundle.Map;
const PopupTemplate = window.esriBundle.PopupTemplate;
const request = window.esriBundle.request;
const Viewpoint = window.esriBundle.Viewpoint;
const WebMap = window.esriBundle.WebMap;
const WebScene = window.esriBundle.WebScene;
const Accessor = window.esriBundle.Accessor;
const Collection = window.esriBundle.Collection;
const Error = window.esriBundle.Error;
const HandleOwner = window.esriBundle.HandleOwner;
const Handles = window.esriBundle.Handles;
const lang = window.esriBundle.lang;
const promiseUtils = window.esriBundle.promiseUtils;
const requireUtils = window.esriBundle.requireUtils;
const scheduling = window.esriBundle.scheduling;
const urlUtils = window.esriBundle.urlUtils;
const watchUtils = window.esriBundle.watchUtils;
const workers = window.esriBundle.workers;
const decorators = window.esriBundle.decorators;
const Connection = window.esriBundle.Connection;
const Circle = window.esriBundle.Circle;
const coordinateFormatter = window.esriBundle.coordinateFormatter;
const Extent = window.esriBundle.Extent;
const Geometry = window.esriBundle.Geometry;
const geometryEngine = window.esriBundle.geometryEngine;
const geometryEngineAsync = window.esriBundle.geometryEngineAsync;
const HeightModelInfo = window.esriBundle.HeightModelInfo;
const Mesh = window.esriBundle.Mesh;
const Multipoint = window.esriBundle.Multipoint;
const Point = window.esriBundle.Point;
const Polygon = window.esriBundle.Polygon;
const Polyline = window.esriBundle.Polyline;
const projection = window.esriBundle.projection;
const ScreenPoint = window.esriBundle.ScreenPoint;
const GeographicTransformation = window.esriBundle.GeographicTransformation;
const GeographicTransformationStep = window.esriBundle.GeographicTransformationStep;
const ImageMeshColor = window.esriBundle.ImageMeshColor;
const jsonUtils = window.esriBundle.jsonUtils;
const MeshComponent = window.esriBundle.MeshComponent;
const meshUtils = window.esriBundle.meshUtils;
const normalizeUtils = window.esriBundle.normalizeUtils;
const ValueMeshColor = window.esriBundle.ValueMeshColor;
const webMercatorUtils = window.esriBundle.webMercatorUtils;
const Credential = window.esriBundle.Credential;
const IdentityManager = window.esriBundle.IdentityManager;
const IdentityManagerBase = window.esriBundle.IdentityManagerBase;
const OAuthInfo = window.esriBundle.OAuthInfo;
const ServerInfo = window.esriBundle.ServerInfo;
const BaseDynamicLayer = window.esriBundle.BaseDynamicLayer;
const BaseElevationLayer = window.esriBundle.BaseElevationLayer;
const BaseTileLayer = window.esriBundle.BaseTileLayer;
const CSVLayer = window.esriBundle.CSVLayer;
const ElevationLayer = window.esriBundle.ElevationLayer;
const FeatureLayer = window.esriBundle.FeatureLayer;
const GeoRSSLayer = window.esriBundle.GeoRSSLayer;
const GraphicsLayer = window.esriBundle.GraphicsLayer;
const GroupLayer = window.esriBundle.GroupLayer;
const ImageryLayer = window.esriBundle.ImageryLayer;
const IntegratedMeshLayer = window.esriBundle.IntegratedMeshLayer;
const KMLLayer = window.esriBundle.KMLLayer;
const Layer = window.esriBundle.Layer;
const MapImageLayer = window.esriBundle.MapImageLayer;
const MapNotesLayer = window.esriBundle.MapNotesLayer;
const OpenStreetMapLayer = window.esriBundle.OpenStreetMapLayer;
const PointCloudLayer = window.esriBundle.PointCloudLayer;
const SceneLayer = window.esriBundle.SceneLayer;
const StreamLayer = window.esriBundle.StreamLayer;
const TileLayer = window.esriBundle.TileLayer;
const UnknownLayer = window.esriBundle.UnknownLayer;
const UnsupportedLayer = window.esriBundle.UnsupportedLayer;
const VectorTileLayer = window.esriBundle.VectorTileLayer;
const WebTileLayer = window.esriBundle.WebTileLayer;
const WMSLayer = window.esriBundle.WMSLayer;
const WMTSLayer = window.esriBundle.WMTSLayer;
const CodedValueDomain = window.esriBundle.CodedValueDomain;
const DimensionalDefinition = window.esriBundle.DimensionalDefinition;
const Domain = window.esriBundle.Domain;
const ElevationSampler = window.esriBundle.ElevationSampler;
const FeatureTemplate = window.esriBundle.FeatureTemplate;
const FeatureType = window.esriBundle.FeatureType;
const Field = window.esriBundle.Field;
const ImageParameters = window.esriBundle.ImageParameters;
const InheritedDomain = window.esriBundle.InheritedDomain;
const KMLSublayer = window.esriBundle.KMLSublayer;
const LabelClass = window.esriBundle.LabelClass;
const LOD = window.esriBundle.LOD;
const MapImage = window.esriBundle.MapImage;
const MosaicRule = window.esriBundle.MosaicRule;
const PixelBlock = window.esriBundle.PixelBlock;
const RangeDomain = window.esriBundle.RangeDomain;
const RasterFunction = window.esriBundle.RasterFunction;
const Relationship = window.esriBundle.Relationship;
const Sublayer = window.esriBundle.Sublayer;
const TileInfo = window.esriBundle.TileInfo;
const TileMatrixSet = window.esriBundle.TileMatrixSet;
const WMSSublayer = window.esriBundle.WMSSublayer;
const WMTSStyle = window.esriBundle.WMTSStyle;
const WMTSSublayer = window.esriBundle.WMTSSublayer;
const Portal = window.esriBundle.Portal;
const PortalFolder = window.esriBundle.PortalFolder;
const PortalGroup = window.esriBundle.PortalGroup;
const PortalItem = window.esriBundle.PortalItem;
const PortalQueryParams = window.esriBundle.PortalQueryParams;
const PortalQueryResult = window.esriBundle.PortalQueryResult;
const PortalRating = window.esriBundle.PortalRating;
const PortalUser = window.esriBundle.PortalUser;
const ClassBreaksRenderer = window.esriBundle.ClassBreaksRenderer;
const PointCloudClassBreaksRenderer = window.esriBundle.PointCloudClassBreaksRenderer;
const PointCloudRenderer = window.esriBundle.PointCloudRenderer;
const PointCloudRGBRenderer = window.esriBundle.PointCloudRGBRenderer;
const PointCloudStretchRenderer = window.esriBundle.PointCloudStretchRenderer;
const PointCloudUniqueValueRenderer = window.esriBundle.PointCloudUniqueValueRenderer;
const Renderer = window.esriBundle.Renderer;
const SimpleRenderer = window.esriBundle.SimpleRenderer;
const UniqueValueRenderer = window.esriBundle.UniqueValueRenderer;
const Action = window.esriBundle.Action;
const ExtrudeSymbol3DLayer = window.esriBundle.ExtrudeSymbol3DLayer;
const FillSymbol = window.esriBundle.FillSymbol;
const FillSymbol3DLayer = window.esriBundle.FillSymbol3DLayer;
const Font = window.esriBundle.Font;
const IconSymbol3DLayer = window.esriBundle.IconSymbol3DLayer;
const LabelSymbol3D = window.esriBundle.LabelSymbol3D;
const LineSymbol = window.esriBundle.LineSymbol;
const LineSymbol3D = window.esriBundle.LineSymbol3D;
const LineSymbol3DLayer = window.esriBundle.LineSymbol3DLayer;
const MarkerSymbol = window.esriBundle.MarkerSymbol;
const MeshSymbol3D = window.esriBundle.MeshSymbol3D;
const ObjectSymbol3DLayer = window.esriBundle.ObjectSymbol3DLayer;
const PathSymbol3DLayer = window.esriBundle.PathSymbol3DLayer;
const PictureFillSymbol = window.esriBundle.PictureFillSymbol;
const PictureMarkerSymbol = window.esriBundle.PictureMarkerSymbol;
const PointSymbol3D = window.esriBundle.PointSymbol3D;
const PolygonSymbol3D = window.esriBundle.PolygonSymbol3D;
const SimpleFillSymbol = window.esriBundle.SimpleFillSymbol;
const SimpleLineSymbol = window.esriBundle.SimpleLineSymbol;
const SimpleMarkerSymbol = window.esriBundle.SimpleMarkerSymbol;
const Symbol = window.esriBundle.Symbol;
const Symbol3D = window.esriBundle.Symbol3D;
const Symbol3DLayer = window.esriBundle.Symbol3DLayer;
const TextSymbol = window.esriBundle.TextSymbol;
const TextSymbol3DLayer = window.esriBundle.TextSymbol3DLayer;
const WebStyleSymbol = window.esriBundle.WebStyleSymbol;
const ClosestFacilityTask = window.esriBundle.ClosestFacilityTask;
const FindTask = window.esriBundle.FindTask;
const GeometryService = window.esriBundle.GeometryService;
const Geoprocessor = window.esriBundle.Geoprocessor;
const IdentifyTask = window.esriBundle.IdentifyTask;
const ImageServiceIdentifyTask = window.esriBundle.ImageServiceIdentifyTask;
const Locator = window.esriBundle.Locator;
const PrintTask = window.esriBundle.PrintTask;
const QueryTask = window.esriBundle.QueryTask;
const RouteTask = window.esriBundle.RouteTask;
const ServiceAreaTask = window.esriBundle.ServiceAreaTask;
const Task = window.esriBundle.Task;
const AddressCandidate = window.esriBundle.AddressCandidate;
const AreasAndLengthsParameters = window.esriBundle.AreasAndLengthsParameters;
const BufferParameters = window.esriBundle.BufferParameters;
const ClosestFacilityParameters = window.esriBundle.ClosestFacilityParameters;
const ClosestFacilitySolveResult = window.esriBundle.ClosestFacilitySolveResult;
const DataFile = window.esriBundle.DataFile;
const DataLayer = window.esriBundle.DataLayer;
const Date = window.esriBundle.Date;
const DensifyParameters = window.esriBundle.DensifyParameters;
const DirectionsFeatureSet = window.esriBundle.DirectionsFeatureSet;
const DistanceParameters = window.esriBundle.DistanceParameters;
const FeatureSet = window.esriBundle.FeatureSet;
const FindParameters = window.esriBundle.FindParameters;
const FindResult = window.esriBundle.FindResult;
const GeneralizeParameters = window.esriBundle.GeneralizeParameters;
const GPMessage = window.esriBundle.GPMessage;
const IdentifyParameters = window.esriBundle.IdentifyParameters;
const IdentifyResult = window.esriBundle.IdentifyResult;
const ImageServiceIdentifyParameters = window.esriBundle.ImageServiceIdentifyParameters;
const ImageServiceIdentifyResult = window.esriBundle.ImageServiceIdentifyResult;
const JobInfo = window.esriBundle.JobInfo;
const LegendLayer = window.esriBundle.LegendLayer;
const LengthsParameters = window.esriBundle.LengthsParameters;
const LinearUnit = window.esriBundle.LinearUnit;
const NAMessage = window.esriBundle.NAMessage;
const OffsetParameters = window.esriBundle.OffsetParameters;
const ParameterValue = window.esriBundle.ParameterValue;
const PrintParameters = window.esriBundle.PrintParameters;
const PrintTemplate = window.esriBundle.PrintTemplate;
const ProjectParameters = window.esriBundle.ProjectParameters;
const Query = window.esriBundle.Query;
const RasterData = window.esriBundle.RasterData;
const RelationParameters = window.esriBundle.RelationParameters;
const RelationshipQuery = window.esriBundle.RelationshipQuery;
const RouteParameters = window.esriBundle.RouteParameters;
const RouteResult = window.esriBundle.RouteResult;
const ServiceAreaParameters = window.esriBundle.ServiceAreaParameters;
const ServiceAreaSolveResult = window.esriBundle.ServiceAreaSolveResult;
const StatisticDefinition = window.esriBundle.StatisticDefinition;
const TrimExtendParameters = window.esriBundle.TrimExtendParameters;
const ConfigurationTask = window.esriBundle.ConfigurationTask;
const JobTask = window.esriBundle.JobTask;
const NotificationTask = window.esriBundle.NotificationTask;
const ReportTask = window.esriBundle.ReportTask;
const TokenTask = window.esriBundle.TokenTask;
const WorkflowTask = window.esriBundle.WorkflowTask;
const GroundView = window.esriBundle.GroundView;
const MapView = window.esriBundle.MapView;
const SceneView = window.esriBundle.SceneView;
const View = window.esriBundle.View;
const ViewAnimation = window.esriBundle.ViewAnimation;
const Draw = window.esriBundle.Draw;
const DrawAction = window.esriBundle.DrawAction;
const MultipointDrawAction = window.esriBundle.MultipointDrawAction;
const PointDrawAction = window.esriBundle.PointDrawAction;
const PolygonDrawAction = window.esriBundle.PolygonDrawAction;
const PolylineDrawAction = window.esriBundle.PolylineDrawAction;
const SegmentDrawAction = window.esriBundle.SegmentDrawAction;
const externalRenderers = window.esriBundle.externalRenderers;
const DefaultUI = window.esriBundle.DefaultUI;
const UI = window.esriBundle.UI;
const Environment = window.esriBundle.Environment;
const InitialViewProperties = window.esriBundle.InitialViewProperties;
const Lighting = window.esriBundle.Lighting;
const Presentation = window.esriBundle.Presentation;
const Slide = window.esriBundle.Slide;

export {
  esriConfig,
  Basemap,
  Camera,
  Color,
  config,
  geometry,
  Graphic,
  Ground,
  kernel,
  Map,
  PopupTemplate,
  request,
  Viewpoint,
  WebMap,
  WebScene,
  Accessor,
  Collection,
  Error,
  HandleOwner,
  Handles,
  lang,
  promiseUtils,
  requireUtils,
  scheduling,
  urlUtils,
  watchUtils,
  workers,
  decorators,
  Connection,
  Circle,
  coordinateFormatter,
  Extent,
  Geometry,
  geometryEngine,
  geometryEngineAsync,
  HeightModelInfo,
  Mesh,
  Multipoint,
  Point,
  Polygon,
  Polyline,
  projection,
  ScreenPoint,
  GeographicTransformation,
  GeographicTransformationStep,
  ImageMeshColor,
  jsonUtils,
  MeshComponent,
  meshUtils,
  normalizeUtils,
  ValueMeshColor,
  webMercatorUtils,
  Credential,
  IdentityManager,
  IdentityManagerBase,
  OAuthInfo,
  ServerInfo,
  BaseDynamicLayer,
  BaseElevationLayer,
  BaseTileLayer,
  CSVLayer,
  ElevationLayer,
  FeatureLayer,
  GeoRSSLayer,
  GraphicsLayer,
  GroupLayer,
  ImageryLayer,
  IntegratedMeshLayer,
  KMLLayer,
  Layer,
  MapImageLayer,
  MapNotesLayer,
  OpenStreetMapLayer,
  PointCloudLayer,
  SceneLayer,
  StreamLayer,
  TileLayer,
  UnknownLayer,
  UnsupportedLayer,
  VectorTileLayer,
  WebTileLayer,
  WMSLayer,
  WMTSLayer,
  CodedValueDomain,
  DimensionalDefinition,
  Domain,
  ElevationSampler,
  FeatureTemplate,
  FeatureType,
  Field,
  ImageParameters,
  InheritedDomain,
  KMLSublayer,
  LabelClass,
  LOD,
  MapImage,
  MosaicRule,
  PixelBlock,
  RangeDomain,
  RasterFunction,
  Relationship,
  Sublayer,
  TileInfo,
  TileMatrixSet,
  WMSSublayer,
  WMTSStyle,
  WMTSSublayer,
  Portal,
  PortalFolder,
  PortalGroup,
  PortalItem,
  PortalQueryParams,
  PortalQueryResult,
  PortalRating,
  PortalUser,
  ClassBreaksRenderer,
  PointCloudClassBreaksRenderer,
  PointCloudRenderer,
  PointCloudRGBRenderer,
  PointCloudStretchRenderer,
  PointCloudUniqueValueRenderer,
  Renderer,
  SimpleRenderer,
  UniqueValueRenderer,
  Action,
  ExtrudeSymbol3DLayer,
  FillSymbol,
  FillSymbol3DLayer,
  Font,
  IconSymbol3DLayer,
  LabelSymbol3D,
  LineSymbol,
  LineSymbol3D,
  LineSymbol3DLayer,
  MarkerSymbol,
  MeshSymbol3D,
  ObjectSymbol3DLayer,
  PathSymbol3DLayer,
  PictureFillSymbol,
  PictureMarkerSymbol,
  PointSymbol3D,
  PolygonSymbol3D,
  SimpleFillSymbol,
  SimpleLineSymbol,
  SimpleMarkerSymbol,
  Symbol,
  Symbol3D,
  Symbol3DLayer,
  TextSymbol,
  TextSymbol3DLayer,
  WebStyleSymbol,
  ClosestFacilityTask,
  FindTask,
  GeometryService,
  Geoprocessor,
  IdentifyTask,
  ImageServiceIdentifyTask,
  Locator,
  PrintTask,
  QueryTask,
  RouteTask,
  ServiceAreaTask,
  Task,
  AddressCandidate,
  AreasAndLengthsParameters,
  BufferParameters,
  ClosestFacilityParameters,
  ClosestFacilitySolveResult,
  DataFile,
  DataLayer,
  Date,
  DensifyParameters,
  DirectionsFeatureSet,
  DistanceParameters,
  FeatureSet,
  FindParameters,
  FindResult,
  GeneralizeParameters,
  GPMessage,
  IdentifyParameters,
  IdentifyResult,
  ImageServiceIdentifyParameters,
  ImageServiceIdentifyResult,
  JobInfo,
  LegendLayer,
  LengthsParameters,
  LinearUnit,
  NAMessage,
  OffsetParameters,
  ParameterValue,
  PrintParameters,
  PrintTemplate,
  ProjectParameters,
  Query,
  RasterData,
  RelationParameters,
  RelationshipQuery,
  RouteParameters,
  RouteResult,
  ServiceAreaParameters,
  ServiceAreaSolveResult,
  StatisticDefinition,
  TrimExtendParameters,
  ConfigurationTask,
  JobTask,
  NotificationTask,
  ReportTask,
  TokenTask,
  WorkflowTask,
  GroundView,
  MapView,
  SceneView,
  View,
  ViewAnimation,
  Draw,
  DrawAction,
  MultipointDrawAction,
  PointDrawAction,
  PolygonDrawAction,
  PolylineDrawAction,
  SegmentDrawAction,
  externalRenderers,
  DefaultUI,
  UI,
  Environment,
  InitialViewProperties,
  Lighting,
  Presentation,
  Slide
}